/* ============================================================
   APLICATIVOS TITOIA — LÓGICA DE LA PÁGINA
   ============================================================
   No hace falta editar este archivo: lee los datos de
   apps-data.js y construye la página automáticamente.
   ============================================================ */

let filtroActivo = "todos";
let textoBusqueda = "";

const catalogo = document.getElementById("catalogo");
const filtrosNodo = document.getElementById("filtros-categoria");
const statsNodo = document.getElementById("hero-stats");
const busquedaNodo = document.getElementById("entrada-busqueda");

/* ---------- Estadísticas del encabezado ---------- */
function pintarEstadisticas() {
  const publicos = APLICATIVOS.filter((a) => a.acceso === "publico").length;
  const datos = [
    { numero: APLICATIVOS.length, etiqueta: "Aplicativos" },
    { numero: CATEGORIAS.length, etiqueta: "Categorías" },
    { numero: publicos, etiqueta: "De acceso libre" },
  ];
  statsNodo.innerHTML = datos
    .map(
      (d) => `
      <div class="stat">
        <div class="stat-numero">${d.numero}</div>
        <div class="stat-etiqueta">${d.etiqueta}</div>
      </div>`
    )
    .join("");
}

/* ---------- Botones de filtro por categoría ---------- */
function pintarFiltros() {
  const botones = [
    { id: "todos", nombre: "✨ Todos" },
    ...CATEGORIAS.map((c) => ({ id: c.id, nombre: `${c.icono} ${c.nombre}` })),
  ];
  filtrosNodo.innerHTML = botones
    .map(
      (b) =>
        `<button class="filtro ${b.id === filtroActivo ? "activo" : ""}" data-filtro="${b.id}">${b.nombre}</button>`
    )
    .join("");

  filtrosNodo.querySelectorAll(".filtro").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtroActivo = btn.dataset.filtro;
      pintarFiltros();
      pintarCatalogo();
    });
  });
}

/* ---------- Tarjeta de un aplicativo ---------- */
function tarjetaHTML(app, categoria) {
  const esPublico = app.acceso === "publico";
  const insignia = esPublico
    ? '<span class="insignia insignia-publico">✓ Acceso libre</span>'
    : '<span class="insignia insignia-permiso">🔑 Con permiso</span>';

  const asunto = encodeURIComponent(`Solicitud de acceso: ${app.nombre}`);
  const cuerpo = encodeURIComponent(
    `Hola Tito:\n\nMe gustaría solicitar acceso al aplicativo "${app.nombre}".\n\nMi nombre: \nInstitución: \nMotivo de uso: \n\n¡Gracias y bendiciones!`
  );

  const botonSecundario = esPublico
    ? ""
    : `<a class="boton-solicitar" href="mailto:${CONTACTO}?subject=${asunto}&body=${cuerpo}">Solicitar acceso</a>`;

  return `
    <article class="tarjeta" style="--color-cat:${categoria.color}">
      <div class="tarjeta-cabecera">
        <div class="tarjeta-icono">${app.icono}</div>
        <div>
          <div class="tarjeta-titulo">${app.nombre}</div>
          ${insignia}
        </div>
      </div>
      <p class="tarjeta-descripcion">${app.descripcion}</p>
      <div class="tarjeta-etiquetas">
        ${(app.etiquetas || []).map((e) => `<span class="etiqueta">${e}</span>`).join("")}
      </div>
      <div class="tarjeta-pie">
        <a class="boton-abrir" href="${app.url}" target="_blank" rel="noopener">Abrir aplicativo →</a>
        ${botonSecundario}
      </div>
    </article>`;
}

/* ---------- Catálogo completo, agrupado por categoría ---------- */
function pintarCatalogo() {
  const texto = textoBusqueda.trim().toLowerCase();

  const coincide = (app) => {
    if (filtroActivo !== "todos" && app.categoria !== filtroActivo) return false;
    if (!texto) return true;
    const contenido = [app.nombre, app.descripcion, ...(app.etiquetas || [])]
      .join(" ")
      .toLowerCase();
    return contenido.includes(texto);
  };

  let html = "";
  for (const cat of CATEGORIAS) {
    const apps = APLICATIVOS.filter((a) => a.categoria === cat.id && coincide(a));
    if (apps.length === 0) continue;
    html += `
      <section class="seccion-categoria">
        <div class="seccion-cabecera">
          <div class="seccion-icono" style="background:${cat.color}">${cat.icono}</div>
          <h2>${cat.nombre}</h2>
        </div>
        <p class="seccion-descripcion">${cat.descripcion}</p>
        <div class="tarjetas">
          ${apps.map((a) => tarjetaHTML(a, cat)).join("")}
        </div>
      </section>`;
  }

  catalogo.innerHTML =
    html ||
    `<p class="sin-resultados">No se encontró ningún aplicativo con esa búsqueda. 🕊️<br>Prueba con otra palabra.</p>`;
}

/* ---------- Contacto ---------- */
function configurarContacto() {
  const asunto = encodeURIComponent("Contacto desde Aplicativos TitoIA");
  document.getElementById("btn-contacto").href = `mailto:${CONTACTO}?subject=${asunto}`;
}

/* ---------- Búsqueda ---------- */
busquedaNodo.addEventListener("input", (e) => {
  textoBusqueda = e.target.value;
  pintarCatalogo();
});

/* ---------- Arranque ---------- */
pintarEstadisticas();
pintarFiltros();
pintarCatalogo();
configurarContacto();
