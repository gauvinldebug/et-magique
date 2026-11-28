---
titre: "Le langage SQL"
---

<div class="encadre">

**L'image.** Une commande au restaurant : quoi (SELECT), où (FROM), à quelles conditions (WHERE).

</div>

## L'essentiel

```sql
SELECT colonnes FROM table WHERE condition ORDER BY colonne;
SELECT COUNT(*) FROM table;
SELECT ... FROM A JOIN B ON A.cle = B.cle;
INSERT INTO table VALUES (...);
UPDATE table SET col = valeur WHERE condition;
DELETE FROM table WHERE condition;
```

<div class="etape o">

Agrégats : COUNT, SUM, AVG, MIN, MAX. DISTINCT supprime les doublons.

</div>

## Les pièges

- <span class="p">UPDATE ou DELETE sans WHERE : toute la table.</span>
- Textes entre apostrophes.
