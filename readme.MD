🧭 Pokédex Pro v2.0

Trainer: Cristian David Díaz Tovar
Materia: Desarrollo de Software

"El código limpio no es el que funciona, sino el que otro desarrollador puede entender y mejorar sin dolor."

🎯 Objetivo

Construir una aplicación web funcional que consuma la PokeAPI, permitiendo la visualización, filtrado y análisis de estadísticas de los 151 Pokémon originales, aplicando principios de Clean Code y UX/UI moderno.

🧩 Características Principales

✅ Consumo de API REST (PokeAPI)
✅ Carga eficiente con Promise.all()
✅ Buscador en tiempo real (Nombre / ID)
✅ Panel de detalles dinámico por tipo
✅ Conversión de unidades (API → lectura humana)
✅ Diseño responsivo (Mobile + Desktop)
✅ Lazy loading de imágenes
✅ Identidad visual temática Pokémon

🛠️ Requerimientos Técnicos
🎨 Frontend & Estilos (CSS)

Diseño Responsivo
La aplicación funciona correctamente en dispositivos móviles y escritorio.

Tipografía Temática

'Press Start 2P' → Títulos

'Montserrat' → Texto
Implementadas mediante @import en CSS.

Identidad Visual

Header con degradado + efecto Glassmorphism

Favicon representativo (Pokébola)

Optimización en Móviles

En pantallas < 600px:

Cards sin imagen

Solo Nombre + ID

⚙️ Lógica de Programación (JavaScript)

Carga Eficiente

Promise.all([...])

Peticiones paralelas de los 151 Pokémon.

Buscador en Tiempo Real

Filtrado dinámico sin recargar la página

Búsqueda por Nombre o ID

Dinamicidad UI

Colores del panel de detalles según tipo principal

🔥 Fuego → Naranja

💧 Agua → Azul

🌿 Planta → Verde

Manejo de Datos
Conversión de unidades:

Hectogramos → Kilogramos (kg)

Decímetros → Metros (m)

📁 Estructura del Proyecto
📦 pokedex-pro-v2
 ┣ 📜 index.html
 ┣ 🎨 style.css
 ┣ ⚙️ app.js
 ┣ 🖼️ img/
 ┗ ⭐ favicon.ico
Archivo	Descripción
index.html	Estructura semántica
style.css	Variables, estilos, media queries
app.js	Consumo API, renderizado, búsqueda
🚀 Optimización Implementada

Promise.all() → Carga paralela

loading="lazy" → Imágenes

Media Queries → UX móvil

Variables CSS → Escalabilidad

📊 Criterios de Evaluación
Criterio	Descripción	Peso
Funcionalidad	Buscador + selección sin errores	40%
Diseño (UI)	Fuentes + estilos dinámicos	30%
Optimización	Promise.all + lazy loading	20%
Responsive Design	Adaptación móvil correcta	10%
🌐 Entregables

1️⃣ Enlace al repositorio de GitHub
2️⃣ Deploy activo en:

Vercel

GitHub Pages

🧪 Tecnologías Utilizadas

HTML5

CSS3

JavaScript (Vanilla JS)

PokeAPI

💡 Posibles Mejoras Futuras

✨ Filtros por tipo
✨ Comparador de Pokémon
✨ Modo oscuro 🌙
✨ Animaciones UI
✨ Favoritos ⭐