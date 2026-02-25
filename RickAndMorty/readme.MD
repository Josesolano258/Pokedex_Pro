# 🛸 Explorador Rick and Morty

Aplicación web que consume la API de **Rick and Morty** para buscar y filtrar personajes.

---

## 🚀 Funcionalidades

✅ Mostrar personajes desde la API  
✅ Buscar por nombre  
✅ Filtrar por estado  
✅ Filtrar por especie  
✅ Loader mientras cargan datos  
✅ Paginación (Anterior / Siguiente)  
✅ Manejo de errores  

---

## 🧠 Conceptos Clave (modo examen)

Este proyecto utiliza:

- **HTML** → estructura
- **CSS** → estilos
- **JavaScript** → lógica
- **Fetch API** → peticiones HTTP
- **Async / Await** → asincronía
- **DOM Manipulation** → actualizar interfaz

---

## 📂 Estructura del Proyecto


/proyecto
├── index.html
├── Rick.css
├── Rick.js


---

## 🖥️ HTML – Elementos importantes

### 🔎 Input de búsqueda

```html
<input type="text" id="name" placeholder="Buscar por nombre">

✔ Permite escribir el nombre del personaje
✔ JS obtiene su valor con:

const name = nameInput.value.trim();
🎯 Selectores (Filtros)
<select id="status">
<select id="species">

✔ Permiten filtrar resultados
✔ .value devuelve opción seleccionada

Ejemplo:

const status = statusSelect.value;
🔘 Botones
Botón	Función
Buscar	Ejecuta consulta
Limpiar	Resetea filtros
Anterior	Página previa
Siguiente	Página siguiente

Ejemplo evento:

searchBtn.addEventListener("click", () => {
  fetchCharacters(1);
});
🌐 Consumo de API (Fetch)
Petición básica
const response = await fetch(url);
const data = await response.json();

✔ fetch() → llama API
✔ await → espera respuesta
✔ .json() → convierte datos

Manejo de errores
if (!response.ok) {
  throw new Error("No se encontraron personajes");
}

✔ Detecta errores HTTP (404, etc)

🔄 Async / Await

Permite escribir código asincrónico como si fuera síncrono.

async function fetchCharacters() {
  const response = await fetch(url);
}
🧩 Construcción de URL dinámica
const url = new URL('https://rickandmortyapi.com/api/character');
url.searchParams.append('page', page);

✔ Evita concatenar strings manualmente
✔ Más limpio y seguro

Agregar filtros:

if (name) url.searchParams.append('name', name);
🎨 Renderizado dinámico (map)
result.innerHTML = characters.map(character => `
  <div class="card">
    <h3>${character.name}</h3>
  </div>
`).join('');

✔ map() recorre array
✔ Genera HTML dinámico

⏳ Loader (Spinner)

Mostrar:

loader.classList.remove("hidden");

Ocultar:

loader.classList.add("hidden");

✔ Feedback visual al usuario

📄 Paginación

Variables de control:

let currentPage = 1;
let totalPages = 1;

Actualizar botones:

prevBtn.disabled = currentPage === 1;
nextBtn.disabled = currentPage === totalPages;
🧹 Limpiar Filtros
nameInput.value = "";
statusSelect.value = "";
speciesSelect.value = "";

✔ Resetea UI

⚠️ Manejo de errores UI
catch (error) {
  result.innerHTML = `<p>${error.message}</p>`;
}

✔ Evita pantalla vacía

✅ Buenas prácticas aplicadas

✔ Script al final del <body>
✔ try / catch / finally
✔ URLSearchParams
✔ Separación HTML / CSS / JS
✔ Variables de estado

🧠 Posibles preguntas de examen

❓ ¿Qué hace fetch()?
Hace peticiones HTTP a APIs.

❓ Diferencia entre .then() y await?
await es sintaxis más limpia sobre Promises.

❓ Para qué sirve map()?
Transformar arrays (ej: datos → HTML).

❓ Qué hace trim()?
Elimina espacios al inicio/final.

❓ Qué significa response.ok?
Indica si la respuesta HTTP fue exitosa.