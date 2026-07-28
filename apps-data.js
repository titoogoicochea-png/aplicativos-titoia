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
    nombre: "Gestión Curricular",
    icono: "📊",
    descripcion: "Gestores con IA para el diseño del currículo: modelo educativo, currículos escolares y universitarios, cursos y asignaturas por competencias, con una cosmovisión bíblica adventista.",
    color: "#1e9e6f",
  },
  {
    id: "academica",
    nombre: "Gestión Académica",
    icono: "📈",
    descripcion: "Aplicativos con IA para acompañar y evaluar el trabajo académico de la institución: desempeño docente, acompañamiento al aula y retroalimentación restauradora desde la cosmovisión bíblica adventista.",
    color: "#d97a2b",
  },
  {
    id: "institucional",
    nombre: "Gestión Institucional",
    icono: "🏛️",
    descripcion: "Referenciales y herramientas para la gestión de la institución educativa: procesos, indicadores y buenas prácticas al servicio de la misión.",
    color: "#3f5a99",
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
    categoria: "institucional",
    acceso: "permiso",
    icono: "🏫",
    descripcion:
      "Referencial para la gestión de internados de la División Sudamericana: procesos, indicadores y buenas prácticas institucionales. (En portugués)",
    etiquetas: ["Internados", "DSA", "Português"],
  },
  {
    nombre: "EIDD — Evaluación Integral del Desempeño Docente",
    url: "https://evaluacion-docente-ub.vercel.app/",
    categoria: "academica",
    acceso: "permiso",
    icono: "🧑‍🏫",
    descripcion:
      "Sistema de acompañamiento y evaluación integral del desempeño docente para la Red Educativa Adventista: acompañamiento al aula, autoevaluación, y evaluación de estudiantes, familias y comisión, con analítica, reportes y retroalimentación restauradora desde la cosmovisión bíblica adventista.",
    etiquetas: ["Acompañamiento docente", "Evaluación integral", "Educación Adventista"],
  },
  {
    nombre: "Currículo EA Paraguay",
    url: "https://curriculo-ea-paraguay.vercel.app/",
    categoria: "gestion",
    acceso: "permiso",
    icono: "🇵🇾",
    descripcion:
      "Gestor curricular exclusivo de la Red Educativa Adventista de la Unión Paraguaya: elaboración y organización del currículo escolar por competencias, integrado a la cosmovisión bíblica adventista.",
    etiquetas: ["Paraguay", "Currículo escolar", "Red Educativa Adventista"],
  },
];
