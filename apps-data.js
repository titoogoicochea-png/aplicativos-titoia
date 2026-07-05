/* ============================================================
   APLICATIVOS TITOIA — DATOS
   ============================================================
   Este es el ÚNICO archivo que hay que editar para actualizar
   la página. Para agregar un aplicativo nuevo, copia un bloque
   { ... } de la lista APLICATIVOS, pégalo al final y cambia sus
   datos. La página se organiza sola por categorías.
   ============================================================ */

const CONTACTO = "claudedsa.itam@upeu.edu.pe";

const CATEGORIAS = [
  {
    id: "comunion",
    nombre: "Comunión con Dios",
    icono: "🙏",
    descripcion: "Aplicativos para fortalecer tu vida espiritual y compartir esperanza.",
    color: "#7c5cbf",
  },
  {
    id: "educacion",
    nombre: "Educación Continua",
    icono: "🎓",
    descripcion: "Cursos y recursos para seguir aprendiendo y creciendo profesionalmente.",
    color: "#2f7dd1",
  },
  {
    id: "gestion",
    nombre: "Gestión Académica",
    icono: "📊",
    descripcion: "Herramientas para optimizar la gestión de instituciones educativas.",
    color: "#1e9e6f",
  },
];

const APLICATIVOS = [
  {
    nombre: "Promesa de Dios para ti",
    url: "https://promesa-de-dios-para-ti.vercel.app/",
    categoria: "comunion",
    acceso: "publico", // "publico" o "permiso"
    icono: "📖",
    descripcion:
      "Recibe una promesa bíblica para tu vida y compártela con quienes más la necesitan. Un momento diario de esperanza y comunión con Dios.",
    etiquetas: ["Biblia", "Devocional", "Esperanza"],
  },
  {
    nombre: "Curso Fundamentos EA",
    url: "https://curso-fundamentosea.vercel.app/",
    categoria: "educacion",
    acceso: "publico",
    icono: "🧭",
    descripcion:
      "Curso interactivo sobre los fundamentos de la Educación Adventista: su filosofía, principios y propósito redentor.",
    etiquetas: ["Curso", "Educación Adventista", "Filosofía"],
  },
  {
    nombre: "Didáctica EA",
    url: "https://didactica-ea.vercel.app/",
    categoria: "educacion",
    acceso: "publico",
    icono: "💡",
    descripcion:
      "Estrategias y recursos didácticos para docentes: metodologías activas aplicadas desde la cosmovisión adventista.",
    etiquetas: ["Docentes", "Metodologías", "Recursos"],
  },
  {
    nombre: "UPeU Courses Gestor",
    url: "https://upeu-courses-gestor.vercel.app/",
    categoria: "gestion",
    acceso: "permiso",
    icono: "🗂️",
    descripcion:
      "Gestor de cursos para la Universidad Peruana Unión: organiza asignaturas, programas y la carga académica de forma sencilla.",
    etiquetas: ["UPeU", "Cursos", "Organización"],
  },
  {
    nombre: "Gestor de Currículo y Asignaturas",
    url: "https://gestor-curriculo-asignaturas-adventistas.vercel.app/",
    categoria: "gestion",
    acceso: "permiso",
    icono: "📚",
    descripcion:
      "Diseña y administra planes curriculares y asignaturas con enfoque adventista, manteniendo coherencia entre niveles y competencias.",
    etiquetas: ["Currículo", "Asignaturas", "Planificación"],
  },
  {
    nombre: "Referencial Gestão Internatos DSA",
    url: "https://referencial-gestao-internatosdsa.vercel.app/",
    categoria: "gestion",
    acceso: "permiso",
    icono: "🏫",
    descripcion:
      "Referencial para la gestión de internados de la División Sudamericana: procesos, indicadores y buenas prácticas institucionales. (En portugués)",
    etiquetas: ["Internados", "DSA", "Português"],
  },
];
