export function cargarAbout() {
  const content = document.getElementById("content");
  
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-page");

  const titulo = document.createElement("h1");
  titulo.textContent = "Sobre Nosotros";

  const texto1 = document.createElement("p");
  texto1.textContent = "Fundado en 1998 por el chef Augusto y su esposa Elena, El Rincón del Búho nació como un pequeño refugio para los amantes de la buena mesa. El nombre surge de un búho real que solía posarse en la ventana de la cocina durante las noches de invierno.";

  const texto2 = document.createElement("p");
  texto2.textContent = "Hoy en día, seguimos manteniendo esa esencia acogedora y familiar. Todos nuestros ingredientes son de origen local, seleccionados cuidadosamente cada mañana en el mercado central. Te invitamos a disfrutar de una velada tranquila, buena música y excelente comida.";


  const imagen = document.createElement("img");
  imagen.src = "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop";
  imagen.alt = "Chef preparando la comida";

  aboutDiv.appendChild(titulo);
  aboutDiv.appendChild(imagen);
  aboutDiv.appendChild(texto1);
  aboutDiv.appendChild(texto2);

  content.appendChild(aboutDiv);
  
}