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
    descripcion: "Aplicativos con IA para acompañar y evaluar el trabajo académico de la institución: desempeño docente, acompañamiento al aula, docentes adjuntos con IA para cada cátedra y retroalimentación restauradora desde la cosmovisión bíblica adventista.",
    color: "#d97a2b",
  },
  {
    id: "institucional",
    nombre: "Gestión Institucional",
    icono: "🏛️",
    descripcion: "Referenciales y herramientas para la gestión de la institución educativa: procesos, indicadores y buenas prácticas al servicio de la misión.",
    color: "#3f5a99",
  },
  {
    id: "calidad",
    nombre: "Gestión de la Calidad",
    icono: "🏅",
    descripcion: "Sistemas de aseguramiento de la calidad y acreditación para las instituciones educativas adventistas: autoevaluación, evidencias y seguimiento de estándares al servicio de la misión.",
    color: "#b8455f",
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
    nombre: "Currículos EA — Uniones DSA",
    url: "https://curriculos-ea-unionesdsa.vercel.app/",
    categoria: "gestion",
    acceso: "permiso",
    icono: "🌎",
    descripcion:
      "Construye el currículo escolar de cada unión de la División Sudamericana a partir del Modelo Educativo Institucional Adventista: matriz de alineamiento competencial, unidades didácticas asistidas por IA y currículos por materia. Cada unión trabaja su propio proyecto, con su equipo y su modelo educativo, desde la cosmovisión bíblica adventista.",
    etiquetas: ["Currículo escolar", "Uniones DSA", "Red Educativa Adventista"],
  },
  {
    nombre: "QSA-AAA — Adventist Quality System",
    url: "https://adventist-quality-system-aaa.vercel.app/",
    categoria: "calidad",
    acceso: "permiso",
    icono: "🏅",
    descripcion:
      "Sistema de gestión de la calidad para las instituciones educativas adventistas: acompaña los procesos de autoevaluación y acreditación de la Adventist Accrediting Association (AAA), con registro de evidencias, seguimiento de estándares y reportes institucionales desde la cosmovisión bíblica adventista.",
    etiquetas: ["Calidad", "Acreditación AAA", "Autoevaluación"],
  },
  {
    nombre: "CátedraIA — Docente Adjunto IA",
    url: "https://catedraia.vercel.app/",
    categoria: "academica",
    acceso: "permiso",
    icono: "🤖",
    descripcion:
      "Cada cátedra, con su docente adjunto IA. El docente sube su sílabo, fija el nivel Bloom de cada capacidad y carga sus evidencias auténticas con rúbricas; el adjunto acompaña a los estudiantes 24/7, los empuja en la escalera de Bloom y retroalimenta todo el proceso —sin escribir nunca el entregable calificado—, y devuelve al docente evidencia explicable de dónde se atascan y qué estudiantes están en riesgo.",
    etiquetas: ["Docente adjunto IA", "Taxonomía de Bloom", "Evidencias auténticas"],
  },
];
