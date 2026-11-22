#!/usr/bin/env python3
"""Met à jour src/data/annales-bac.json : les sujets du bac de spécialité maths (depuis 2021)
publiés par l'APMEP (https://www.apmep.fr/Annales-Terminale-Generale), avec le thème de chaque exercice.

On ne copie aucun PDF : le site met seulement un lien vers la page d'origine de l'APMEP,
ouvert dans un nouvel onglet, avec la source citée (conditions : https://www.apmep.fr/spip.php?page=mentions).

Usage : python3 scripts/annales_apmep.py   (besoin de curl et pdftotext)
Le thème des exercices est deviné à partir des mots du sujet : c'est une aide au tri, pas une vérité.
"""
import html, json, os, re, subprocess, tempfile, unicodedata

ANNEES = range(2021, 2031)
BASE = 'https://www.apmep.fr/'
SORTIE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'annales-bac.json')

def get(url, dest):
    return subprocess.run(['curl', '-sfL', '-o', dest, url]).returncode == 0

def n(s):
    return unicodedata.normalize('NFD', s.lower()).encode('ascii', 'ignore').decode()

BLOCS = {
    'suites': [r'\bsuites?\b', r'recurrence', r'\bu\s?n\b', r'u\s?n\s?\+\s?1'],
    'fonctions': [r'\bfonction', r'derivee', r'\bln\b', r'exponentielle', r'courbe', r'convex', r'integrale', r'primitive', r'tangente'],
    'espace': [r'espace', r'\bplans?\b', r'droites?\b', r'vecteurs?\b', r'parametrique', r'orthogonal', r'tetraedre|cube|pyramide'],
    'probas': [r'probabilite', r'aleatoire', r'binomiale', r'tirage', r'esperance', r'evenement'],
}
SOUS = {
    'suites': {'suites-et-recurrence': r'recurrence', 'limites-de-suites': r'converge|limite'},
    'fonctions': {'logarithme-neperien': r'\bln\b|logarithme', 'derivation-et-convexite': r'convex|concav|inflexion',
                  'integration': r'integrale', 'primitives-et-equations-differentielles': r'equation differentielle|primitive',
                  'fonctions-trigonometriques': r'\bcos\b|\bsin\b', 'continuite': r'valeurs intermediaires',
                  'limites-de-fonctions': r'asymptote|limite'},
    'espace': {'geometrie-dans-l-espace': r'.'},
    'probas': {'loi-binomiale': r'binomiale', 'loi-des-grands-nombres': r'bienayme|concentration|grands nombres|variance',
               'denombrement': r'denombrement|combinaison|anagramme|k-uplet|nombre de (codes|mots|tirages|facons|possibilites)'},
}

def exercices(pdf):
    t = n(subprocess.run(['pdftotext', '-q', pdf, '-'], capture_output=True, text=True).stdout)
    parts = re.split(r'\n\s*e\s?xercice\s*([0-9ab])(?=[ \t(]|\n)[^\n]*\n', t)
    out, vus = [], set()
    for k in range(1, len(parts) - 1, 2):
        num = parts[k].upper() if parts[k] in 'ab' else int(parts[k])
        corps = parts[k + 1]
        if num in vus or len(corps) < 300:
            continue
        vus.add(num)
        score = {b: sum(len(re.findall(p, corps)) for p in ps) for b, ps in BLOCS.items()}
        theme = max(score, key=score.get)
        out.append({'n': num, 'theme': theme, 'chapitres': [c for c, p in SOUS[theme].items() if re.search(p, corps)]})
    return sorted(out, key=lambda e: str(e['n']))

def main():
    tmp = tempfile.mkdtemp()
    sujets = []
    for a in ANNEES:
        page = os.path.join(tmp, f'{a}.html')
        if not get(f'{BASE}Annee-{a}', page):
            continue
        s = open(page, encoding='utf-8').read()
        for row in re.findall(r'<tr class=.row_(?:odd|even)[^>]*>(.*?)</tr>', s, re.S):
            tds = re.findall(r'<td[^>]*>(.*?)</td>', row, re.S)
            if len(tds) < 2:
                continue
            label = ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', tds[0])).split())
            suj = re.search(r'href="([^"]+\.pdf)"', tds[1])
            cor = re.search(r'href="([^"]+\.pdf)"', tds[2]) if len(tds) > 2 else None
            if not suj or re.search(r'compl|index|^Année', label):
                continue
            pdf = os.path.join(tmp, f'{len(sujets)}.pdf')
            ex = exercices(pdf) if get(BASE + suj.group(1), pdf) else []
            sujets.append({'annee': a, 'titre': label, 'sujet': BASE + suj.group(1),
                           'corrige': BASE + cor.group(1) if cor else None, 'exercices': ex})
            print(a, label, [e['theme'] for e in ex])
    json.dump({'source': 'APMEP', 'page': BASE + 'Annales-Terminale-Generale', 'sujets': sujets},
              open(SORTIE, 'w'), ensure_ascii=False, indent=1)
    print(len(sujets), 'sujets ->', SORTIE)

if __name__ == '__main__':
    main()
