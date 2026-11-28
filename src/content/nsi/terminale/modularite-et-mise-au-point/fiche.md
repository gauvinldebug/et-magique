---
titre: "Modularité et mise au point"
---

<div class="encadre">

**L'image.** Des briques aux attaches standard : on les assemble sans savoir comment elles sont faites.

</div>

## L'essentiel

<div class="etape o">

Fonction = une tâche. Module = fichier de fonctions, importé avec `import`. API = ce qu'un module met à disposition. Docstring = spécification (préconditions, postconditions).

</div>

```python
assert moyenne([10, 20]) == 15   # test
try:
    n = int(texte)
except ValueError:
    n = 0
```

## Les pièges

- <span class="p">Un test réussi ne prouve pas la correction : tester les cas limites.</span>
- Pas de `==` entre flottants.
