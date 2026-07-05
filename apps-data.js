/* ============================================================
   APLICATIVOS TITOIA — DATOS
   ============================================================
   Este es el ÚNICO archivo que hay que editar para actualizar
   la página. Para agregar un aplicativo nuevo, copia un bloque
   { ... } de la lista APLICATIVOS, pégalo al final y cambia sus
   datos. La página se organiza sola por categorías.
   ============================================================ */

const CONTACTO = "tito.goicochea@upeu.edu.pe";

const CATEGORIAS = [
  {
    id: "comunion",
    nombre: "Comunión con Dios",
    icono: "🙏",
    descripcion: "Aplicativos que te ayudarán en tu crecimiento espiritual.",
    color: "#7c5cbf",
  },
  {
    id: "educacion",
    nombre: "Educación Continua",
    icono: "🎓",
    descripcion: "Cursos asincrónicos para estar actualizado en temas de educación y un planificador de secuencias didácticas con IA que diseña sesiones de aprendizaje para inicial, primaria, secundaria, universidad y Escuela Sabática.",
    color: "#2f7dd1",
  },
  {
    id: "gestion",
    nombre: "Gestión Académica",
    icono: "📊",
    descripcion: "Gestores curriculares con IA que ayudan a las instituciones educativas a elaborar sus currículos y asignaturas por competencias, con una cosmovisión bíblica adventista.",
    color: "#1e9e6f",
  },
];

const APLICATIVOS = [
  {
    nombre: "Una Promesa de Dios para Ti",
    url: "https://promesa-de-dios-para-ti.vercel.app/",
    categoria: "comunion",
    acceso: "publico", // "publico", "registro" o "permiso"
    icono: "📖",
    descripcion:
      "Devocional diario 2026: recibe cada día una promesa bíblica con audio para escucharla, en español y portugués. Un momento de esperanza y comunión con Dios.",
    etiquetas: ["Devocional diario", "Con audio", "Español y Português"],
  },
  {
    nombre: "FundamentosEA",
    url: "https://curso-fundamentosea.vercel.app/",
    categoria: "educacion",
    acceso: "registro",
    icono: "🧭",
    descripcion:
      "Curso interactivo sobre los fundamentos de la Educación Adventista: su filosofía, principios y propósito redentor.",
    etiquetas: ["Curso", "Educación Adventista", "Filosofía"],
  },
  {
    nombre: "DidácticaEA — Planificador Didáctico",
    url: "https://didactica-ea.vercel.app/",
    categoria: "educacion",
    acceso: "registro",
    icono: "💡",
    descripcion:
      "Planificador didáctico adventista: diseña tus sesiones de clase con metodologías activas desde la cosmovisión bíblica.",
    etiquetas: ["Docentes", "Planificación de clases", "Metodologías"],
  },
  {
    nombre: "UPeU Courses Gestor (Genesis Courses)",
    url: "https://upeu-courses-gestor.vercel.app/",
    categoria: "gestion",
    acceso: "permiso",
    icono: "🗂️",
    descripcion:
      "Diseña cursos universitarios alineados a las competencias institucionales y del programa de estudios, integrando la cosmovisión bíblica adventista en todas las fases.",
    etiquetas: ["UPeU", "Diseño de cursos", "Competencias"],
  },
  {
    nombre: "Gestor de Currículo y Asignaturas",
    url: "https://gestor-curriculo-asignaturas-adventistas.vercel.app/",
    categoria: "gestion",
    acceso: "permiso",
    icono: "📚",
    descripcion:
      "Elabora el modelo educativo institucional, currículos de pregrado y posgrado, y asignaturas integradas a competencias y a la cosmovisión bíblica adventista.",
    etiquetas: ["Modelo educativo", "Currículo", "Asignaturas"],
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
