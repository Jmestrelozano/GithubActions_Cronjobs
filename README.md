
## INSTALLATION

Intalacion de GithubActions_Cronjobs con npm

```bash
  npm install
```
    
Lanzamiento

```bash
  npm run dev
```
## GITHUB ACTIONS

Configuraciones


- Primero debemos crear nuestro archivo de actions .yaml
- Creamos la configuracion necesaria para correr tu actions

## Usage/Examples

```javascript
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Build and Deploy

on:
  push:
    branches: ["main"] # Cambiar "main" por el nombre de la rama principal de tu repositorio (por ejemplo, "master" o "main")
  pull_request:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "18" # Cambiar la versión de Node.js según tus necesidades

      - name: Install dependencies
        run: npm ci # O yarn install si usas Yarn

      - name: Build
        run: npm run build # O el comando para construir tu aplicación

      - name: imprimiendo
        run: echo ${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Vercel Action
        uses: BetaHuhn/deploy-to-vercel-action@v1
        with:
          GITHUB_TOKEN: ${{ secrets.GH_PAT }}
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }} # Asegúrate de configurar la variable de entornos en los secretos de tu repositorio en GitHub
```


- ## Environment Variables

Asegúrate de configurar la variable de entornos en los secretos de tu repositorio en GitHub, que estan ubicados en los settings > secrets_and_variables > actions

`GH_PAT`

`VERCEL_TOKEN`

`VERCEL_ORG_ID`

`VERCEL_PROJECT_ID`


- ## Feedback

Recuerda que para obtner el `ORG_ID` y  `PROJECT_ID` de tu proyecto de vercel
tienes que entrar en las settings globales > your_id se encontrara el valor para 
`ORG_ID` y la del `PROJECT_ID` entra al proyecto y copia  el nombre del proyecto en este caso https://vercel.com/jmestrelozano/github-actions-cronjobs seria `github-actions-cronjobs` como su valor

- para obtener un `VERCEL_TOKEN` RECUERDA que tienes que crear uno para tu proyecto en especifico - asegurate de guardarlo -> https://vercel.com/account/tokens
- para obtener el `GH_PAT` RECUERDA que tienes que generarlo en tu github en developer settings -> https://github.com/settings/tokens asegurate de crear tu token y guardarlo
