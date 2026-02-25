/****************************************************
 * REFERENCIAS AL DOM
 * Aquí guardamos en variables los elementos del HTML
 ****************************************************/

// Contenedor donde se pintan las cards
const result = document.getElementById('results');

// Loader (spinner)
const loader = document.getElementById('loader');

// Texto de paginación
const pageInfo = document.getElementById('pageInfo');

// Inputs / filtros
const nameInput = document.getElementById('name');
const statusSelect = document.getElementById('status');
const speciesSelect = document.getElementById('species');

// Botones
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


/****************************************************
 * VARIABLES DE ESTADO
 * Controlan en qué página estamos
 ****************************************************/
let currentPage = 1;
let totalPages = 1;


/****************************************************
 * FUNCIÓN PRINCIPAL → fetchCharacters()
 * Hace la petición a la API
 ****************************************************/
async function fetchCharacters(page = 1) {

    // 1️⃣ Tomamos valores de los filtros
    const name = nameInput.value.trim();  // trim() elimina espacios
    const status = statusSelect.value;
    const species = speciesSelect.value;

    // 2️⃣ Construimos la URL dinámicamente
    const url = new URL('https://rickandmortyapi.com/api/character');

    // Agregamos SIEMPRE la página
    url.searchParams.append('page', page);

    // Agregamos filtros SOLO si tienen valor
    if (name) url.searchParams.append('name', name);
    if (status) url.searchParams.append('status', status);
    if (species) url.searchParams.append('species', species);

    try {
        /****************************************************
         * UI → Mostrar loader antes de pedir datos
         ****************************************************/
        loader.classList.remove("hidden");

        // Limpiamos resultados anteriores
        result.innerHTML = "";

        /****************************************************
         * PETICIÓN FETCH
         ****************************************************/
        const response = await fetch(url);

        // Si la API responde error (404, etc)
        if (!response.ok) {
            throw new Error("No se encontraron personajes");
        }

        // Convertimos respuesta a JSON
        const data = await response.json();

        /****************************************************
         * ACTUALIZAMOS ESTADO DE PAGINACIÓN
         ****************************************************/
        totalPages = data.info.pages;
        currentPage = page;

        /****************************************************
         * RENDERIZAMOS PERSONAJES
         ****************************************************/
        renderCharacters(data.results);

        /****************************************************
         * ACTUALIZAMOS BOTONES
         ****************************************************/
        updatePagination();

    } catch (error) {
        /****************************************************
         * MANEJO DE ERRORES
         ****************************************************/
        result.innerHTML = `<p>${error.message}</p>`;
        pageInfo.textContent = "";
    } finally {
        /****************************************************
         * UI → Ocultar loader pase lo que pase
         ****************************************************/
        loader.classList.add("hidden");
    }
}


/****************************************************
 * renderCharacters()
 * Genera las cards HTML
 ****************************************************/
function renderCharacters(characters) {

    // map() recorre cada personaje
    // join('') convierte array → string HTML
    result.innerHTML = characters.map(character => `
        <div class="card">
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>${character.status} - ${character.species}</p>
        </div>
    `).join('');
}


/****************************************************
 * updatePagination()
 * Actualiza texto y deshabilita botones
 ****************************************************/
function updatePagination() {

    // Texto tipo "Página 2 de 42"
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

    // Deshabilitar botones según página
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}


/****************************************************
 * EVENTOS
 ****************************************************/

// 🔍 Buscar → Siempre vuelve a página 1
searchBtn.addEventListener("click", () => {
    fetchCharacters(1);
});


// 🧹 Limpiar filtros
clearBtn.addEventListener("click", () => {

    // Reseteamos inputs
    nameInput.value = "";
    statusSelect.value = "";
    speciesSelect.value = "";

    // Recargamos página 1 sin filtros
    fetchCharacters(1);
});


// ⬅ Página anterior
prevBtn.addEventListener("click", () => {

    if (currentPage > 1) {
        fetchCharacters(currentPage - 1);
    }
});


// ➡ Página siguiente
nextBtn.addEventListener("click", () => {

    if (currentPage < totalPages) {
        fetchCharacters(currentPage + 1);
    }
});


/****************************************************
 * CARGA INICIAL
 * Se ejecuta al abrir la página
 ****************************************************/
fetchCharacters();