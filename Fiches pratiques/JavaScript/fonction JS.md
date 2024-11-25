---
MOC:
  - "[[Fiches pratiques/JavaScript/JavaScript]]"
---
## Egalité dans un argument

```JavaScript
const twoFer = (who = 'you') => {
    return `One for ${who}, one for me.`; 
}
```
Dans cette exemple, si l'argument "who" n'est pas renseigné, il prendra la valeur 'you' sinon celle qu'on a attribué.