# Project-Restaurant-Page

## Qué es esto
Proyecto de práctica (The Odin Project) para construir la página de un
restaurante con Webpack + JavaScript vanilla (sin frameworks). Usa
navegación por "tabs" (Home / Menu / Contact) que se renderizan dinámicamente
vía JS, sin recargar la página.

## Reglas para Claude en este repo
- **Es una tarea/ejercicio de aprendizaje.** No escribas la solución completa
  (contenido de las tabs, lógica de cambio de tabs, DOM manipulation) a menos
  que se pida explícitamente. Prioriza pistas, explicaciones y revisar lo que
  el usuario ya escribió, en vez de completar los TODOs por él.
- Está bien ayudar con configuración/infraestructura (Webpack, npm scripts,
  deploy a GitHub Pages, debugging de errores de build) ya que eso no es el
  objetivo de aprendizaje del ejercicio.
- Si el usuario pide explícitamente "resuélvelo" o "escribe el código", se
  puede proceder normalmente.

## Estructura
```
src/
  template.html      # esqueleto HTML: header > nav (botones) + div#content
  index.js           # entry point: importa módulos de pages/ y arma
                      #   los event listeners de las tabs
  styles.css         # estilos globales
  pages/
    home.js          # export default function que arma la homepage
    menu.js          # export default function que arma la tab Menu
    contact.js       # export default function que arma la tab Contact
webpack.config.js     # config única (mode development, devServer, HtmlWebpackPlugin)
```
Todos los archivos de `pages/` y `index.js` están hechos como templates con
comentarios `TODO` marcando dónde va la lógica — deliberadamente sin
implementar.

## Stack / decisiones
- Webpack 5, `html-webpack-plugin` para inyectar `main.js` en `template.html`.
- `style-loader` + `css-loader` para poder importar `styles.css` desde JS.
- `package.json` tiene `"type": "module"` → `webpack.config.js` está escrito
  en sintaxis ESM (`import`/`export default`), no CommonJS.
- No se instaló `html-loader` (no hay `<img src="./local.png">` en el HTML
  todavía). Si se agregan imágenes locales referenciadas en el HTML, instalar
  y configurar `html-loader` en ese momento — no antes.

## Comandos
- `npm start` → `webpack serve --open` (dev server en http://localhost:8080)
- `npm run build` → `webpack` (genera `dist/`)
- `npm run watch` → `webpack --watch`

## Deploy (GitHub Pages vía rama gh-pages)
Ver el enunciado del ejercicio. Resumen del flujo de re-deploy:
1. Commitear todo en `main`.
2. `git checkout gh-pages && git merge main --no-edit`
3. `npx webpack` (genera `dist/`)
4. `git add dist -f && git commit -m "Deployment commit"`
5. `git subtree push --prefix dist origin gh-pages`
6. `git checkout main`
La rama `gh-pages` se crea una sola vez (`git branch gh-pages`) y el source
de GitHub Pages en Settings debe apuntar a esa rama.
