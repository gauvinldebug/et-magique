---
titre: "Traiter des données en tables"
---

<div class="encadre">

**L'image.** Un tableur dont chaque ligne devient une fiche (un dictionnaire).

</div>

## L'essentiel

```python
import csv
with open("f.csv", encoding="utf-8") as f:
    table = list(csv.DictReader(f, delimiter=";"))
sel = [l for l in table if condition]
tri = sorted(table, key=lambda l: l["col"])
```

<div class="etape o">

CSV : texte, 1re ligne = descripteurs. Table = liste de dictionnaires. Valeurs lues = chaînes : convertir.

</div>

## Les pièges

- <span class="p">"9" > "12" est vrai : convertir avant de comparer.</span>
- Bon séparateur, bon encodage.
