# 📘 GUÍA COMPLETA – CONSUMO DE APIs EN JAVASCRIPT (Modo Examen 🚀)

Este documento funciona como **material de repaso intensivo** para exámenes o talleres relacionados con:

✔ Consumo de APIs REST  
✔ Fetch API  
✔ async / await  
✔ Promise.all()  
✔ Manipulación del DOM  
✔ Eventos (click / input)  
✔ Buscadores dinámicos  
✔ Renderizado de datos  

---

# 🧠 1. ¿Qué es una API?

Una **API (Application Programming Interface)** es un intermediario que permite que una aplicación obtenga datos desde un servidor.

Ejemplo:

- Tu app → hace petición HTTP → API → responde con datos (JSON)

---

# 🌐 2. ¿Qué es una API REST?

Una API REST permite acceder a recursos mediante URLs.

Ejemplo:


https://api.com/usuarios

https://api.com/productos

https://pokeapi.co/api/v2/pokemon/25


Cada endpoint devuelve datos estructurados (normalmente JSON).

---

# 📦 3. ¿Qué es JSON?

Formato de datos ligero y legible.

Ejemplo:

```json
{
  "name": "pikachu",
  "id": 25
}
⚡ 4. ¿Qué es fetch()?

Función nativa de JavaScript para realizar peticiones HTTP.

fetch("https://api.com/data")

👉 fetch() devuelve una Promesa

🔁 5. ¿Qué es una Promesa?

Objeto que representa un valor futuro:

✔ Pending
✔ Resolved
✔ Rejected

🚀 6. Consumo básico de API (then)
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
✨ 7. Consumo moderno (async/await)
async function loadData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
🏎 8. Carga eficiente con Promise.all()

Permite ejecutar múltiples peticiones en paralelo.

const requests = [];

for (let i = 1; i <= 151; i++) {
  requests.push(
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(r => r.json())
  );
}

const pokemons = await Promise.all(requests);
🎯 9. ¿Por qué usar Promise.all()?

✔ Optimiza tiempo de carga
✔ Evita peticiones secuenciales
✔ Mejora rendimiento

🧱 10. Estructura típica del proyecto
/proyecto-api/
│
├── index.html
├── styles.css
└── app.js
📄 11. HTML Base
<header>
  <h1>Mi App</h1>
  <input type="text" id="search">
</header>

<main>
  <aside id="details"></aside>
  <section id="grid"></section>
</main>
🎨 12. CSS Base
body {
  font-family: Arial;
}

.grid {
  display: grid;
}
⚙️ 13. Referencias al DOM
const grid = document.getElementById("grid");
const details = document.getElementById("details");
const searchInput = document.getElementById("search");

👉 Permiten manipular elementos desde JS.

🔄 14. Renderizado dinámico
function renderGrid(data) {
  grid.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.textContent = item.name;
    grid.appendChild(card);
  });
}
🖱 15. Eventos en botones
button.addEventListener("click", () => {
  console.log("Click detectado");
});
🔎 16. Buscador en tiempo real
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
});
🧪 17. Filtrar datos con filter()
const filtered = dataList.filter(item =>
  item.name.includes(value)
);

✔ Devuelve nuevo array
✔ No modifica original

🧬 18. Transformar datos con map()
dataList.map(item => item.name);
🧱 19. Crear tarjetas dinámicamente
const card = document.createElement("div");

card.innerHTML = `
  <h3>${pokemon.name}</h3>
`;

grid.appendChild(card);
🖼 20. Lazy Loading
<img loading="lazy">

✔ Mejora rendimiento
✔ Ideal para muchas imágenes

📊 21. Renderizar detalles
function renderDetails(item) {
  details.innerHTML = `
    <h2>${item.name}</h2>
  `;
}
🎨 22. UI Dinámica por Datos

Ejemplo:

details.style.borderColor = "red";
⚖️ 23. Conversión de datos API

Ejemplo Pokédex:

const weightKg = pokemon.weight / 10;
const heightM = pokemon.height / 10;
🔁 24. Flujo completo de App API

1️⃣ Cargar datos
2️⃣ Guardar en array
3️⃣ Renderizar grid
4️⃣ Eventos click
5️⃣ Renderizar detalles
6️⃣ Filtrar búsqueda

🎮 25. Ejemplo práctico – Pokédex

✔ fetch Pokémon
✔ render cards
✔ click → detalles
✔ input → filtro

👽 26. Ejemplo práctico – Rick & Morty
fetch("https://rickandmortyapi.com/api/character")

Campos comunes:

✔ name
✔ status
✔ image

🧯 27. Manejo de Errores
try {
  ...
} catch (error) {
  console.error(error);
}
🚨 28. Errores típicos en examen

❌ Olvidar await
❌ No usar response.json()
❌ ID incorrecto DOM
❌ Variables mal nombradas

🏆 29. Buenas prácticas (Clean Code)

✔ Funciones separadas
✔ Nombres descriptivos
✔ Evitar código repetido
✔ Manejo de errores

📱 30. Responsive Design
@media (max-width: 600px) {
  .card img {
    display: none;
  }
}
🎯 31. Checklist mental para examen

✅ fetch correcto
✅ await usado
✅ .json() aplicado
✅ DOM referenciado
✅ filter() funciona
✅ Eventos activos

💡 32. Resumen Express

✔ API → datos remotos
✔ fetch → petición HTTP
✔ Promise → valor futuro
✔ async/await → sintaxis limpia
✔ Promise.all → paralelo
✔ filter/map → arrays
✔ DOM → UI dinámica