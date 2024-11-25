---
MOC:
  - "[[Fiches pratiques/JavaScript/JavaScript]]"
---
## Immutabilité

Les chaines de caractères en JavaScript sont [[immutables]]. Cela signifie qu'une fois un variable déclarée en temps que chaine de caractères, on ne peut pas modifier un de ses éléments :
```JavaScript
let mot = "tas"
mot[0] = 'c'
console.log(mot) // 'tas'
```
Note : ce n'est pas le cas pour les [[Tableau JS]].
## Méthodes
**`repeat()`**  :
Construit et renvoie une nouvelle chaine de caractères qui contient le nombre de copie demandée de la chaine de caractères sur laquelle la méthode a été appelée, concaténées les unes aux autres.

