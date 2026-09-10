# Project-Restaurant-Page

Página de un restaurante construida con **JavaScript vanilla** (sin
frameworks) y empaquetada con **Webpack**. La navegación entre secciones
(Home, Menu, Contact) funciona con "tabs": los botones del header cambian el
contenido de `div#content` dinámicamente vía JS, sin recargar la página.

Proyecto de práctica basado en el ejercicio "Restaurant Page" de The Odin
Project.

## Tecnologías usadas
- **JavaScript (ES Modules)** — lógica y generación de contenido vía DOM.
- **Webpack 5** — bundler (`webpack`, `webpack-cli`, `webpack-dev-server`).
- **html-webpack-plugin** — inyecta el bundle en `src/template.html`.
- **style-loader** / **css-loader** — permite importar CSS desde JS.
- **HTML5 / CSS3**

## Estructura del proyecto
```
src/
  template.html      # esqueleto: header > nav (botones) + div#content
  index.js           # entry point: arma las tabs y sus event listeners
  styles.css         # estilos globales
  pages/
    home.js          # construye y devuelve el contenido de la Home
    menu.js          # construye y devuelve el contenido del Menu
    contact.js       # construye y devuelve el contenido de Contact
webpack.config.js     # configuración de Webpack
```

## Cómo correrlo
```bash
npm install        # instala dependencias
npm start          # dev server en http://localhost:8080 (con hot reload)
npm run build      # genera la versión final en dist/
npm run watch      # recompila en cada cambio, sin dev server
```

## Qué hay que hacer (checklist del ejercicio)
- [x] Setup inicial: `package.json` + Webpack configurado.
- [x] `.gitignore` con `node_modules` y `dist`.
- [x] Esqueleto HTML: `header` con `nav` y botones de tabs + `div#content`.
- [ ] Probar que el JS corre (console.log/alert) con `npx webpack serve`.
- [ ] Armar la Home hardcodeada dentro de `div#content` (imagen, título, texto).
- [ ] Sacar ese contenido del HTML y generarlo por JS en un módulo aparte,
      importado y ejecutado desde `index.js`.
- [ ] Crear los módulos de las tabs Menu y Contact (cada uno exporta una
      función que arma su contenido y lo agrega al DOM).
- [ ] Escribir en `index.js` la lógica de cambio de tabs: cada botón limpia
      `div#content` y llama al módulo correspondiente.
- [ ] Deploy a GitHub Pages (rama `gh-pages`).

## Deploy a GitHub Pages
1. Commitear todos los cambios en `main`.
2. `git checkout gh-pages && git merge main --no-edit`
3. `npx webpack` (genera `dist/`)
4. `git add dist -f && git commit -m "Deployment commit"`
5. `git subtree push --prefix dist origin gh-pages`
6. `git checkout main`

La rama `gh-pages` se crea una sola vez con `git branch gh-pages`, y el
source de GitHub Pages (en Settings del repo) debe apuntar a esa rama.
