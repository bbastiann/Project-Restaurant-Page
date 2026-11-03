export function cargarHome() {
  const content = document.getElementById("content");
  
  
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-page");


  const titulo = document.createElement("h1");
  titulo.textContent = "Bienvenido a El Rincón del Búho";

 
  const imagen = document.createElement("img");
  imagen.src = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop";
  imagen.alt = "Interior acogedor del restaurante";

  const texto = document.createElement("p");
  texto.textContent = "Disfruta de la mejor cocina de autor...";

  
  homeDiv.appendChild(titulo);
  homeDiv.appendChild(imagen);
  homeDiv.appendChild(texto);

 
  content.appendChild(homeDiv);


}