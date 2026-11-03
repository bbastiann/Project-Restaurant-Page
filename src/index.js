import "./styles.css";
import { cargarHome } from "./home.js";
import { cargarMenu } from "./menu.js";
import { cargarAbout } from "./about.js";

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