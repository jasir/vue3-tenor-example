# Vue 3 + Vite + Quasar + Vuex + VueRouter

## Jak spustit

```sh
yarn install
yarn dev
```

## Podmínky:

-   Aplikace má vypisovat obsah z rest API [https://tenor.com/gifapi/documentation](https://tenor.com/gifapi/documentation).
-   Používá Vue router a Vuex.
-   Má minimálně dvě stránky.
-   První stránka výpis trendů.
-   Druhá stránka výsledky vyhledávání.
-   Výraz pro vyhledávání se píše do inputu. Request na API se automaticky odešle, pokud uživatel přestane psát na více jak 200ms.
-   Obsah z API se ukládá do Vuexu, odkud se data vypisují do komponent.
-   Výsledná aplikace je uložena ve veřejném git repozitáři.

## Poznámky k implementaci

- automatické zapamatování vyhledávacího input
- store je realizován jako dva namespacované moduly, pro každou stránku
- použití composition api
- pro komponenty a css jsem použil framework [quasar](https://quasar.dev/)
- pro volání jsem použil [axios](https://axios-http.com/docs/intro)

## Recommended IDE Setup


- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
