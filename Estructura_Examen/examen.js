// ===============================
// REFERENCIAS DOM
// ===============================
const grid = document.getElementById("grid");
const details = document.getElementById("details");
const searchInput = document.getElementById("search");

// ===============================
// VARIABLES
// ===============================
let dataList = []; // Aquí guardas los datos de la API

// ===============================
// FUNCIÓN CARGA API
// ===============================
async function loadData() {
  try {

    const requests = [];

    // ⚡ Ejemplo estilo Pokédex (puedes cambiar rango)
    for (let i = 1; i <= 10; i++) {
      requests.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then(r => r.json())
      );
    }

    dataList = await Promise.all(requests);

    renderGrid(dataList);

  } catch (error) {
    grid.innerHTML = "<p>Error cargando datos</p>";
    console.error(error);
  }
}

// ===============================
// RENDER GRID
// ===============================
function renderGrid(list) {
  grid.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img loading="lazy" src="${item.sprites.front_default}">
      <h3>${item.name}</h3>
      <span>#${item.id}</span>
    `;

    card.addEventListener("click", () => renderDetails(item));

    grid.appendChild(card);
  });
}

// ===============================
// BUSCADOR
// ===============================
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  const filtered = dataList.filter(item =>
    item.name.includes(value) ||
    item.id.toString().includes(value)
  );

  renderGrid(filtered);
});

// ===============================
// DETALLES
// ===============================
function renderDetails(item) {
  details.innerHTML = `
    <h2>${item.name}</h2>
    <img src="${item.sprites.front_default}">
    <p><strong>ID:</strong> ${item.id}</p>
  `;
}

// ===============================
// INIT
// ===============================
loadData();