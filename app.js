// ===============================
// REFERENCIAS AL DOM
// ===============================

// Contenedor donde van las tarjetas
const grid = document.getElementById("grid");

// Panel lateral de detalles
const details = document.getElementById("details");

// Input del buscador
const searchInput = document.getElementById("search");

// ===============================
// VARIABLES GLOBALES
// ===============================

// Aquí guardaremos TODOS los Pokémon cargados
let pokemons = [];


// ===============================
// COLORES POR TIPO (UX dinámico)
// ===============================

const typeColors = {
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850",
  electric: "#f8d030",
  psychic: "#f85888",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  fairy: "#ee99ac",
  normal: "#a8a878",
  fighting: "#c03028",
  flying: "#a890f0",
  poison: "#a040a0",
  ground: "#e0c068",
  rock: "#b8a038",
  bug: "#a8b820",
  ghost: "#705898",
  steel: "#b8b8d0"
};


// ===============================
// FUNCIÓN PRINCIPAL → CARGA API
// ===============================

async function loadPokemons() {

  try {

    // Array donde guardamos TODAS las promesas fetch
    const requests = [];

    // Generamos 151 peticiones (Pokémon 1 → 151)
    for (let i = 1; i <= 151; i++) {

      // fetch devuelve una promesa
      // .then(r => r.json()) convierte respuesta a JSON
      requests.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then(response => response.json())
      );
    }

    // Promise.all ejecuta TODO en paralelo 🚀
    pokemons = await Promise.all(requests);

    // Renderizamos las tarjetas cuando termina la carga
    renderGrid(pokemons);

  } catch (error) {

    // Si algo falla → mensaje visual + consola
    grid.innerHTML = "<p>Error cargando Pokémon 😢</p>";
    console.error("Error en carga:", error);
  }
}


// ===============================
// RENDERIZAR GRID (tarjetas)
// ===============================

function renderGrid(list) {

  // Limpiamos el grid antes de volver a pintar
  grid.innerHTML = "";

  // Recorremos la lista recibida
  list.forEach(pokemon => {

    // Creamos un div dinámicamente
    const card = document.createElement("div");
    card.className = "card";

    // Insertamos contenido HTML dentro de la card
    card.innerHTML = `
      <!-- Imagen del Pokémon -->
      <img 
        loading="lazy" 
        src="${pokemon.sprites.front_default}" 
        alt="${pokemon.name}"
      >

      <!-- Nombre -->
      <h3>${pokemon.name}</h3>

      <!-- ID -->
      <span>#${pokemon.id}</span>
    `;

    // Evento click → mostrar detalles
    card.addEventListener("click", () => {
      renderDetails(pokemon);
    });

    // Insertamos card en el grid
    grid.appendChild(card);
  });
}


// ===============================
// BUSCADOR EN TIEMPO REAL 🔎
// ===============================

searchInput.addEventListener("input", event => {

  // Texto que escribe el usuario
  const value = event.target.value.toLowerCase();

  // Filtramos Pokémon por:
  // ✔ Nombre
  // ✔ ID
  const filtered = pokemons.filter(pokemon => {

    return (
      pokemon.name.includes(value) ||
      pokemon.id.toString().includes(value)
    );
  });

  // Renderizamos SOLO resultados filtrados
  renderGrid(filtered);
});


// ===============================
// PANEL DE DETALLES
// ===============================

function renderDetails(pokemon) {

  // Tipo principal (el primero del array)
  const mainType = pokemon.types[0].type.name;

  // Color según tipo
  const color = typeColors[mainType] || "#ffcc00";

  // Cambiamos borde dinámicamente (UX cool)
  details.style.borderColor = color;

  // Conversión de unidades:
  // weight → hectogramos → kg
  const weightKg = (pokemon.weight / 10).toFixed(1);

  // height → decímetros → metros
  const heightM = (pokemon.height / 10).toFixed(1);

  // Insertamos HTML dinámico
  details.innerHTML = `
    <h2>#${pokemon.id} ${pokemon.name}</h2>

    <img src="${pokemon.sprites.front_default}">

    <p><strong>Peso:</strong> ${weightKg} kg</p>
    <p><strong>Altura:</strong> ${heightM} m</p>

    <h3>Estadísticas Base</h3>

    ${
      // stats es un array → lo recorremos
      pokemon.stats.map(stat => `

        <div class="stat">

          <!-- Nombre de la stat -->
          <small>${stat.stat.name}</small>

          <!-- Barra -->
          <div class="bar">
            <div 
              class="bar-fill" 
              style="
                width: ${stat.base_stat / 2}%;
                background: ${color};
              ">
            </div>
          </div>

        </div>

      `).join("")
    }
  `;
}


// ===============================
// INICIO DE LA APP 🚀
// ===============================

// Ejecutamos carga inicial
loadPokemons();