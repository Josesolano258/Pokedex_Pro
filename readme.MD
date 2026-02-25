# 🚀 Pokédex Pro v2.0

Aplicación web desarrollada para el taller / examen de **Consumo de APIs** en la materia **Desarrollo de Software**.

La app consume datos en tiempo real desde la **PokeAPI**, mostrando información detallada de los **151 Pokémon originales**, permitiendo búsqueda, visualización de estadísticas y una experiencia UX/UI moderna.

---

# 🎯 Objetivo del Proyecto

Construir una aplicación web que demuestre:

✔ Consumo de API REST  
✔ Manipulación dinámica del DOM  
✔ Carga eficiente de datos  
✔ Filtrado en tiempo real  
✔ Diseño responsivo  
✔ Clean Code  

---

# 🛠 Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica |
| CSS3 | Estilos + Responsive Design |
| JavaScript (Vanilla) | Lógica y consumo API |
| PokeAPI | Fuente de datos |

---

# ⚡ Funcionalidades Implementadas

✅ Consumo de la **PokeAPI**  
✅ Carga de los **151 Pokémon originales**  
✅ Uso de `Promise.all()` para optimización  
✅ Buscador en tiempo real (nombre / ID)  
✅ Renderizado dinámico de tarjetas  
✅ Panel de detalles interactivo  
✅ Conversión de unidades (kg / metros)  
✅ Barras de estadísticas dinámicas  
✅ Colores dinámicos por tipo  
✅ Lazy loading de imágenes  
✅ Diseño responsivo  

---

# 🌐 Consumo de API

Endpoint utilizado:


https://pokeapi.co/api/v2/pokemon/{id}


Ejemplo:

```javascript
fetch("https://pokeapi.co/api/v2/pokemon/25")
🚀 Optimización con Promise.all()

Se realizan 151 peticiones en paralelo:

const requests = [];

for (let i = 1; i <= 151; i++) {
  requests.push(fetch(url).then(r => r.json()));
}

const pokemons = await Promise.all(requests);
✅ Ventajas:

✔ Reduce tiempo de carga
✔ Mejora rendimiento
✔ Evita peticiones secuenciales

🔎 Buscador en Tiempo Real

Evento utilizado:

input

Filtrado dinámico:

pokemons.filter(pokemon =>
  pokemon.name.includes(value) ||
  pokemon.id.toString().includes(value)
);
✅ Beneficios:

✔ UX fluida
✔ Sin recargar página
✔ Feedback inmediato

🎨 Diseño & UX/UI

Características visuales:

✨ Header con degradado
✨ Glassmorphism / Blur
✨ Tipografía temática
✨ Tarjetas interactivas
✨ Efectos hover
✨ Colores dinámicos

🔤 Tipografías
Fuente	Uso
Press Start 2P	Títulos
Montserrat	Texto

Importadas mediante:

@import url(...)
🎨 Colores Dinámicos por Tipo

Ejemplo:

const typeColors = {
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850"
};

Aplicado a:

✔ Bordes del panel
✔ Barras de estadísticas

📊 Manejo de Datos (Conversión)

La API devuelve:

Campo	Unidad API	Conversión
weight	hectogramos	kg (/10)
height	decímetros	metros (/10)

Ejemplo:

const weightKg = pokemon.weight / 10;
const heightM = pokemon.height / 10;
📱 Responsive Design

Diseño adaptable a:

✔ Desktop
✔ Tablet
✔ Mobile

📌 Regla clave:

En pantallas < 600px:

Se ocultan imágenes en cards

Se muestra solo nombre + ID

@media (max-width: 600px) {
  .card img {
    display: none;
  }
}
🖼 Lazy Loading

Optimización de imágenes:

<img loading="lazy">
✅ Beneficios:

✔ Mejora rendimiento
✔ Reduce consumo de datos
✔ Mejor experiencia móvil

🧠 Conceptos Clave Aplicados

✔ Fetch API
✔ async / await
✔ Promise.all()
✔ DOM Manipulation
✔ Event Listeners
✔ filter()
✔ map()
✔ Template Strings
✔ Lazy Loading
✔ Responsive Design
✔ Clean Code

📂 Estructura del Proyecto
pokedex-pro/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
└── img/
🚀 Cómo Ejecutar

1️⃣ Clonar repositorio:

git clone https://github.com/usuario/pokedex-pro.git

2️⃣ Abrir index.html

(No requiere backend)

🌐 Deploy

Proyecto desplegado en:

👉 Vercel / GitHub Pages

✅ Criterios Académicos Cumplidos

✔ Funcionalidad sin errores
✔ Promise.all implementado
✔ Lazy loading activo
✔ Responsive correcto
✔ UX/UI moderno
✔ Clean Code

✨ Autor

Nombre del Estudiante
Materia: Desarrollo de Software


🌐 Proyecto: Consumo de API REST

Descripción breve del proyecto.

Aplicación web desarrollada en HTML, CSS y JavaScript, que consume datos desde una API REST y los muestra dinámicamente en pantalla.

🎯 Objetivo

La aplicación permite:

✅ Consumir datos desde una API
✅ Convertir respuestas JSON
✅ Mostrar información en el DOM
✅ Implementar búsqueda / filtros
✅ Manejar asincronía

🔗 API Utilizada

Nombre de la API:
[Coloca aquí la API del examen]

Endpoint base:

https://api.ejemplo.com/items

📌 Ejemplo real:

https://api.ejemplo.com/users
https://api.ejemplo.com/products
https://api.ejemplo.com/characters
⚙️ Tecnologías

HTML5

CSS3

JavaScript (Vanilla JS)

Fetch API

🚀 Guía Universal de Consumo de API
🔥 1. Petición básica
fetch("URL_AQUI")

👉 Devuelve una Promise

⚡ 2. Versión PRO con async/await
async function cargarDatos() {
  const response = await fetch("URL_AQUI");
  const data = await response.json();

  console.log(data);
}

✅ Cambias solo:

"URL_AQUI"
❌ 3. Con manejo de errores (EXAMEN LOVES THIS)
async function cargarDatos() {
  try {
    const response = await fetch("URL_AQUI");
    const data = await response.json();

    console.log(data);
    renderizarDatos(data);

  } catch (error) {
    console.error("Error:", error);
  }
}
🧩 Renderizar Datos en Pantalla
🎯 Crear elementos dinámicamente
function renderizarDatos(data) {
  const container = document.querySelector("#container");

  data.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item.name;

    container.appendChild(div);
  });
}

✅ Cambias según la API:

item.name
item.title
item.username
item.productName
🖼️ Mostrar imagen + texto
div.innerHTML = `
  <img src="${item.image}" />
  <h3>${item.name}</h3>
`;

✅ Adaptable a:

item.avatar
item.thumbnail
item.photo
🔎 Buscador Universal
input.addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();

  const filtrados = data.filter(item =>
    item.name.toLowerCase().includes(texto)
  );

  mostrarFiltrados(filtrados);
});

✅ Cambias:

item.name

por:

item.title
item.username
item.product
🧠 Métodos Clave que debes saber usar
Método	Uso
forEach()	Recorrer datos
map()	Transformar
filter()	Filtrar
find()	Buscar uno
⚡ Promise.all (cuando hay múltiples requests)
const promises = ids.map(id =>
  fetch(`${URL}/${id}`).then(r => r.json())
);

const results = await Promise.all(promises);
🎯 Flujo Universal del Examen

Cuando te den la API:

✅ 1. Copias URL
✅ 2. fetch
✅ 3. await response.json()
✅ 4. console.log(data) 🔥
✅ 5. Revisas estructura
✅ 6. Recorres array
✅ 7. Renderizas
✅ 8. Agregas eventos



🌐 Guía Completa — Consumo de API + Botones + Filtros
🎯 Objetivo

Aprender a:

✅ Consumir una API REST
✅ Convertir respuesta JSON
✅ Mostrar datos en pantalla (DOM)
✅ Conectar botones
✅ Implementar buscador
✅ Filtrar información

🔥 1. Consumir la API
⚡ Estructura básica con fetch
fetch("https://api.ejemplo.com/items")
  .then(response => response.json())
  .then(data => console.log(data));
🚀 Versión PRO (async/await)
async function cargarDatos() {
  try {
    const response = await fetch("https://api.ejemplo.com/items");
    const data = await response.json();

    console.log(data); // SIEMPRE revisar estructura
    renderizarDatos(data);

  } catch (error) {
    console.error("Error:", error);
  }
}
🧠 2. Guardar datos globalmente

Esto es CLAVE para filtros y búsqueda.

let datosAPI = [];
async function cargarDatos() {
  const response = await fetch(URL);
  const data = await response.json();

  datosAPI = data;
  renderizarDatos(datosAPI);
}
🧩 3. Mostrar datos en pantalla (DOM)
🎯 HTML base
<div id="container"></div>
⚡ Render dinámico
function renderizarDatos(lista) {
  const container = document.querySelector("#container");

  container.innerHTML = ""; // limpiar

  lista.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
      </div>
    `;
  });
}
🖼️ Con imagen
container.innerHTML += `
  <div class="card">
    <img src="${item.image}" />
    <h3>${item.name}</h3>
  </div>
`;

✅ Cambiar según API:

item.title
item.username
item.photo
🔎 4. Buscador en tiempo real
🎯 HTML
<input id="searchInput" placeholder="Buscar..." />
⚡ JS
const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();

  const filtrados = datosAPI.filter(item =>
    item.name.toLowerCase().includes(texto)
  );

  renderizarDatos(filtrados);
});
🏷️ 5. Botones por categoría
🎯 HTML
<button data-category="fire">🔥 Fuego</button>
<button data-category="water">💧 Agua</button>
<button data-category="grass">🌿 Planta</button>
<button id="btnReset">Reset</button>
⚡ JS
const botones = document.querySelectorAll("button");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const categoria = boton.dataset.category;

    if (categoria) {
      filtrarPorCategoria(categoria);
    }
  });
});
🔥 6. Filtrar por categoría
function filtrarPorCategoria(categoria) {
  const filtrados = datosAPI.filter(item =>
    item.category.includes(categoria)
  );

  renderizarDatos(filtrados);
}

✅ Adaptable a:

item.type
item.genre
item.role
🔄 7. Botón Reset
const btnReset = document.querySelector("#btnReset");

btnReset.addEventListener("click", () => {
  renderizarDatos(datosAPI);
});
⚡ 8. Flujo completo mental
🧠 Cuando te ponen API en examen:

✅ 1. fetch(URL)
✅ 2. await response.json()
✅ 3. console.log(data) 🔥
✅ 4. Guardar en variable global
✅ 5. renderizarDatos(data)
✅ 6. Botones → addEventListener
✅ 7. filter()
✅ 8. renderizarDatos(filtrados)

🧠 9. Métodos IMPORTANTÍSIMOS
Método	Uso en examen
forEach()	recorrer datos
map()	transformar
filter()	filtrar
find()	buscar uno
🎯 Ejemplo filter
const filtrados = datosAPI.filter(item =>
  item.name.includes("pik")
);
❌ 10. Manejo de errores
try {
  const response = await fetch(URL);
} catch (error) {
  console.error(error);
}
🎯 Preguntas típicas del profe 😈

✔️ ¿Qué devuelve fetch? → Promise
✔️ ¿Qué es JSON?
✔️ ¿Qué hace await?
✔️ ¿Qué hace filter()?
✔️ ¿Qué es el DOM?
✔️ ¿Qué hace addEventListener?

💡 Tips Ninja 🥷😎

✅ console.log(data) SIEMPRE
✅ No memorizar API → entender estructura
✅ Solo cambias:

URL

item.propiedad (name, title, etc.)

NO rehaces toda la lógica.