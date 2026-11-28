---
titre: "Les dictionnaires"
---

<div class="encadre">

**L'image.** Un vestiaire : le ticket (clé) mène directement au manteau (valeur).

</div>

## L'essentiel

```python
d = {"a": 1}
d["b"] = 2         # ajout
"a" in d           # test de clé
d.get("z", 0)      # 0 si absente
for k, v in d.items():
    ...
```

<div class="etape o">

Clés uniques et non modifiables. Accès direct et rapide par la clé. `in` teste les clés.

</div>

## Les pièges

- <span class="p">Clé absente : KeyError.</span>
- `for x in d` parcourt les clés.
