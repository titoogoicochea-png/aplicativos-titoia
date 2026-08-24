/* ============================================================
   APLICATIVOS TITOIA — LÓGICA DE LA PÁGINA
   ============================================================
   No hace falta editar este archivo: lee los datos de
   apps-data.js y construye la página automáticamente.
   ============================================================ */

let filtroActivo = "todos";
let textoBusqueda = "";
/* Categorías desplegadas. Al entrar o refrescar la página arrancan todas
   cerradas: se ve el índice completo de categorías y cada quien abre la
   que le interesa (o usa "Abrir todo"). */
const categoriasAbiertas = new Set();

const catalogo = document.getElementById("catalogo");
const filtrosNodo = document.getElementById("filtros-categoria");
const statsNodo = document.getElementById("hero-stats");
const busquedaNodo = document.getElementById("entrada-busqueda");

/* ---------- Estadísticas del encabezado ---------- */
function pintarEstadisticas() {
  const abiertos = APLICATIVOS.filter((a) => a.acceso !== "permiso").length;
  const datos = [
    { numero: APLICATIVOS.length, etiqueta: "Aplicativos" },
    { numero: CATEGORIAS.length, etiqueta: "Categorías" },
    { numero: abiertos, etiqueta: "Abiertos a todos" },
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
  const esPermiso = app.acceso === "permiso";
  const insignias = {
    publico: '<span class="insignia insignia-publico">✓ Acceso libre</span>',
    registro: '<span class="insignia insignia-registro">📝 Registro libre</span>',
    permiso: '<span class="insignia insignia-permiso">🔑 Con permiso</span>',
  };
  const insignia = insignias[app.acceso] || insignias.publico;

  const asunto = encodeURIComponent(`Solicitud de acceso: ${app.nombre}`);
  const cuerpo = encodeURIComponent(
    `Hola Tito:\n\nMe gustaría solicitar acceso al aplicativo "${app.nombre}".\n\nMi nombre: \nInstitución: \nMotivo de uso: \n\n¡Gracias y bendiciones!`
  );

  const botonSecundario = esPermiso
    ? `<a class="boton-solicitar" href="mailto:${CONTACTO}?subject=${asunto}&body=${cuerpo}">Solicitar acceso</a>`
    : "";

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

  /* Al buscar o al filtrar por una categoría, se abre todo lo que coincide
     para que los resultados estén a la vista sin tener que desplegarlos. */
  const abrirTodo = texto !== "" || filtroActivo !== "todos";

  const grupos = CATEGORIAS.map((cat) => ({
    cat,
    apps: APLICATIVOS.filter((a) => a.categoria === cat.id && coincide(a)),
  })).filter((g) => g.apps.length > 0);

  if (grupos.length === 0) {
    catalogo.innerHTML = `<p class="sin-resultados">No se encontró ningún aplicativo con esa búsqueda. 🕊️<br>Prueba con otra palabra.</p>`;
    return;
  }

  const total = grupos.reduce((n, g) => n + g.apps.length, 0);
  const todasAbiertas = grupos.every((g) => abrirTodo || categoriasAbiertas.has(g.cat.id));
  const plural = (n, singular, pluralPalabra) => `${n} ${n === 1 ? singular : pluralPalabra}`;

  let html = `
    <div class="catalogo-barra">
      <span class="catalogo-resumen">${plural(grupos.length, "categoría", "categorías")} · ${plural(total, "aplicativo", "aplicativos")}</span>
      <button class="btn-todo" id="btn-todo" type="button">${todasAbiertas ? "Cerrar todo" : "Abrir todo"}</button>
    </div>`;

  for (const { cat, apps } of grupos) {
    const abierta = abrirTodo || categoriasAbiertas.has(cat.id);
    html += `
      <section class="seccion-categoria ${abierta ? "abierta" : ""}" data-categoria="${cat.id}" style="--color-cat:${cat.color}">
        <button class="seccion-cabecera" type="button" aria-expanded="${abierta}" aria-controls="panel-${cat.id}">
          <span class="seccion-icono" style="background:${cat.color}">${cat.icono}</span>
          <span class="seccion-textos">
            <span class="seccion-titulo">${cat.nombre}</span>
            <span class="seccion-descripcion">${cat.descripcion}</span>
          </span>
          <span class="seccion-conteo">${plural(apps.length, "aplicativo", "aplicativos")}</span>
          <span class="seccion-flecha" aria-hidden="true">⌄</span>
        </button>
        <div class="seccion-panel ${abierta ? "expandida" : ""}" id="panel-${cat.id}">
          <div class="seccion-interior">
            <div class="tarjetas">
              ${apps.map((a) => tarjetaHTML(a, cat)).join("")}
            </div>
          </div>
        </div>
      </section>`;
  }

  catalogo.innerHTML = html;
  conectarSecciones();
}

/* ---------- Abrir y cerrar las secciones ---------- */
function conectarSecciones() {
  catalogo.querySelectorAll(".seccion-categoria").forEach((seccion) => {
    const id = seccion.dataset.categoria;
    const cabecera = seccion.querySelector(".seccion-cabecera");
    const panel = seccion.querySelector(".seccion-panel");

    /* Mientras se anima el panel se recorta; ya abierto se deja visible para
       que no se corten las sombras de las tarjetas al pasar el mouse. */
    panel.addEventListener("transitionend", (e) => {
      if (e.propertyName === "grid-template-rows") liberarRecorte(seccion, panel);
    });

    cabecera.addEventListener("click", () => {
      const abierta = seccion.classList.toggle("abierta");
      cabecera.setAttribute("aria-expanded", abierta);
      panel.classList.remove("expandida");
      if (abierta) categoriasAbiertas.add(id);
      else categoriasAbiertas.delete(id);
      /* Respaldo por si la transición no llega a dispararse (movimiento
         reducido, pestaña en segundo plano…). */
      setTimeout(() => liberarRecorte(seccion, panel), 450);
      document.getElementById("btn-todo").textContent = todasSeccionesAbiertas() ? "Cerrar todo" : "Abrir todo";
    });
  });

  const btnTodo = document.getElementById("btn-todo");
  btnTodo.addEventListener("click", () => {
    const abrir = !todasSeccionesAbiertas();
    catalogo.querySelectorAll(".seccion-categoria").forEach((seccion) => {
      const id = seccion.dataset.categoria;
      seccion.classList.toggle("abierta", abrir);
      seccion.querySelector(".seccion-cabecera").setAttribute("aria-expanded", abrir);
      const panel = seccion.querySelector(".seccion-panel");
      panel.classList.remove("expandida");
      setTimeout(() => liberarRecorte(seccion, panel), 450);
      if (abrir) categoriasAbiertas.add(id);
      else categoriasAbiertas.delete(id);
    });
    btnTodo.textContent = abrir ? "Cerrar todo" : "Abrir todo";
  });
}

function liberarRecorte(seccion, panel) {
  if (seccion.classList.contains("abierta")) panel.classList.add("expandida");
}

function todasSeccionesAbiertas() {
  const secciones = [...catalogo.querySelectorAll(".seccion-categoria")];
  return secciones.length > 0 && secciones.every((s) => s.classList.contains("abierta"));
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
