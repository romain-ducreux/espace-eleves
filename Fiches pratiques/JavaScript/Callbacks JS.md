---
MOC:
  - "[[Fiches pratiques/JavaScript/JavaScript]]"
---
Un Callback en Javascript est une [[fonction JS|fonction]] passée en argument d'une autre fonction.

Elle permet le fonctionnement asynchrone du programme : partons du principe que la fonction A mette 10 secondes à finir de s'exécuter alors que la fonction B s'exécute instantanément, si la fonction B est placée après la A, elle sera malheureusement exécutée plus tard.