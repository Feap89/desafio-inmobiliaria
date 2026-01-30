// Arreglo de propiedades en venta
const propiedades_venta = [
  {
    nombre: "Casa en la playa",
    src: "assets/img/country1.jpg",
    descripcion: "Hermosa casa frente al mar con terraza amplia.",
    ubicacion: "Viña del Mar",
    habitaciones: 4,
    costo: 250000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Departamento céntrico",
    src: "assets/img/country2.jpg",
    descripcion: "Moderno departamento en pleno centro de la ciudad.",
    ubicacion: "Santiago",
    habitaciones: 2,
    costo: 150000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Parcela familiar",
    src: "assets/img/depto.jpg",
    descripcion: "Amplia parcela ideal para familias y reuniones.",
    ubicacion: "Temuco",
    habitaciones: 5,
    costo: 320000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Loft minimalista",
    src: "assets/img/depto2.jpg", 
    descripcion: "Loft con diseño moderno y minimalista.",
    ubicacion: "Concepción",
    habitaciones: 1,
    costo: 120000,
    smoke: false,
    pets: false
  }
];

// Arreglo de propiedades en alquiler
const propiedades_alquiler = [
  {
    nombre: "Casa en la montaña",
    src: "assets/img/country.jpg", 
    descripcion: "Casa acogedora con vista a la cordillera.",
    ubicacion: "Pucón",
    habitaciones: 3,
    costo: 180000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento universitario",
    src: "assets/img/depto1.jpg", 
    descripcion: "Ideal para estudiantes, cerca de universidades.",
    ubicacion: "Valdivia",
    habitaciones: 2,
    costo: 100000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Cabaña rústica",
    src: "assets/img/beach1.jpg", 
    descripcion: "Cabaña rodeada de naturaleza y tranquilidad.",
    ubicacion: "Puerto Varas",
    habitaciones: 2,
    costo: 130000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Estudio compacto",
    src: "assets/img/beach.jpg", 
    descripcion: "Espacio pequeño pero funcional y económico.",
    ubicacion: "Osorno",
    habitaciones: 1,
    costo: 80000,
    smoke: false,
    pets: false
  }
];

// Función para renderizar propiedades
function renderizarPropiedades(lista, contenedorId, limite = null) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  const propiedades = limite ? lista.slice(0, limite) : lista;

  propiedades.forEach(prop => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${prop.src}" alt="${prop.nombre}">
        <h3>${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
        <p><strong>Precio:</strong> $${prop.costo}</p>
        <p>${prop.smoke ? "✅ Se permite fumar" : "❌ No se permite fumar"}</p>
        <p>${prop.pets ? "🐶 Mascotas permitidas" : "🚫 No se permiten mascotas"}</p>
      </div>
    `;
  });
}

// Detectar en qué página estamos y renderizar
if (document.getElementById("venta")) {
  if (window.location.pathname.includes("index.html")) {
    renderizarPropiedades(propiedades_venta, "venta", 3);
  } else {
    renderizarPropiedades(propiedades_venta, "venta");
  }
}

if (document.getElementById("alquiler")) {
  if (window.location.pathname.includes("index.html")) {
    renderizarPropiedades(propiedades_alquiler, "alquiler", 3);
  } else {
    renderizarPropiedades(propiedades_alquiler, "alquiler");
  }
}