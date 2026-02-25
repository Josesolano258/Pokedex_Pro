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