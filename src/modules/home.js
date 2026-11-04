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
  texto.textContent = "Disfruta de la mejor cocina de autor en un ambiente íntimo y rústico. Nuestro chef combina sabores tradicionales con técnicas modernas para crear una experiencia culinaria inolvidable.";

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  const horariosDiv = document.createElement("div");
  horariosDiv.classList.add("info-card");
  
  const horariosTitulo = document.createElement("h2");
  horariosTitulo.textContent = "Horarios";
  
  const horariosTexto = document.createElement("p");
  horariosTexto.textContent = "Martes a Domingo\n18:00 - 23:30";
  horariosTexto.style.whiteSpace = "pre-line";

  horariosDiv.appendChild(horariosTitulo);
  horariosDiv.appendChild(horariosTexto);

  const resenaDiv = document.createElement("div");
  resenaDiv.classList.add("info-card");

  const resenaTitulo = document.createElement("h2");
  resenaTitulo.textContent = "Lo que dicen";

  const resenaTexto = document.createElement("p");
  resenaTexto.textContent = '"La mejor experiencia gastronómica que he tenido en años. El ambiente es mágico y los sabores inigualables."';

  resenaDiv.appendChild(resenaTitulo);
  resenaDiv.appendChild(resenaTexto);

  infoContainer.appendChild(horariosDiv);
  infoContainer.appendChild(resenaDiv);

  const contactoDiv = document.createElement("div");
  contactoDiv.classList.add("contacto-container");

  const contactoTitulo = document.createElement("h2");
  contactoTitulo.textContent = "Visítanos";

  const contactoTexto = document.createElement("p");
  contactoTexto.textContent = "Calle de los Búhos 42, Ciudad Antigua";

  const redesTexto = document.createElement("p");
  redesTexto.classList.add("redes-texto");
  redesTexto.textContent = "Síguenos en Instagram: @elrincondelbuho | Reservas: +56 9 1234 5678";

  contactoDiv.appendChild(contactoTitulo);
  contactoDiv.appendChild(contactoTexto);
  contactoDiv.appendChild(redesTexto);

  homeDiv.appendChild(titulo);
  homeDiv.appendChild(imagen);
  homeDiv.appendChild(texto);
  homeDiv.appendChild(infoContainer);
  homeDiv.appendChild(contactoDiv);

  content.appendChild(homeDiv);
}