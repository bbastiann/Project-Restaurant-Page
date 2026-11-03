export function cargarMenu() {
  const content = document.getElementById("content");
  
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-page");

  const titulo = document.createElement("h1");
  titulo.textContent = "Nuestro Menú";

 
  const listaPlatos = document.createElement("div");
  listaPlatos.classList.add("platos-container");

 
  const platos = [
    { nombre: "Filete de Búho (Especialidad)", precio: "$25.00", desc: "Jugoso filete de res con salsa de vino tinto y puré de castañas." },
    { nombre: "Ensalada Nocturna", precio: "$12.00", desc: "Mezcla de hojas verdes, arándanos, queso de cabra y aderezo de miel." },
    { nombre: "Pasta del Bosque", precio: "$18.00", desc: "Fettuccine en salsa cremosa de champiñones silvestres." },
    { nombre: "Postre Lechuza", precio: "$8.00", desc: "Mousse de chocolate oscuro con un toque de avellanas." }
  ];

 
  platos.forEach(plato => {
    const platoDiv = document.createElement("div");
    platoDiv.classList.add("plato");

    const nombrePlato = document.createElement("h3");
    nombrePlato.textContent = plato.nombre;

    const precioPlato = document.createElement("span");
    precioPlato.textContent = plato.precio;
    precioPlato.style.float = "right"; // Un truco rápido para alinear el precio

    const descPlato = document.createElement("p");
    descPlato.textContent = plato.desc;

    platoDiv.appendChild(nombrePlato);
    platoDiv.appendChild(precioPlato);
    platoDiv.appendChild(descPlato);

    listaPlatos.appendChild(platoDiv);
  });

  menuDiv.appendChild(titulo);
  menuDiv.appendChild(listaPlatos);
  content.appendChild(menuDiv);
}