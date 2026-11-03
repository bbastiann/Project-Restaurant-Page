import "./css/styles.css";
import "./css/home.css";
import "./css/menu.css";
import "./css/about.css";

import { cargarHome } from "./modules/home.js";
import { cargarMenu } from "./modules/menu.js";
import { cargarAbout } from "./modules/about.js";

cargarHome();
const homeButton = document.getElementById("home-btn");
const aboutButton = document.getElementById("about-btn");
const menuButton = document.getElementById("menu-btn");

//Limpiamos para que no se solape el contenido
function limpiarContenido() {
  content.innerHTML = "";
}

homeButton.addEventListener("click", () => {
  limpiarContenido();
  cargarHome();
});

menuButton.addEventListener("click", () => {
  limpiarContenido();
  cargarMenu();
});

aboutButton.addEventListener("click", () => {
  limpiarContenido();
  cargarAbout();
});