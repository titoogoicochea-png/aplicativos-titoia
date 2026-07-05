# Aplicativos TitoIA 

Portal que reúne y organiza todos los aplicativos de Tito, para ayudar a personas
e instituciones en su **comunión con Dios**, su **educación continua** y su
**gestión académica**.

## ¿Cómo agrego o actualizo un aplicativo?

Solo hay que editar **un archivo**: [`apps-data.js`](apps-data.js).

1. Abre `apps-data.js`.
2. Copia un bloque `{ ... }` de la lista `APLICATIVOS` y pégalo al final de la lista.
3. Cambia el nombre, la URL, la categoría (`comunion`, `educacion` o `gestion`),
   el acceso (`publico` o `permiso`), el ícono (un emoji) y la descripción.
4. Guarda. La página se reorganiza sola: cuenta los aplicativos, los pone en su
   categoría y les crea su tarjeta con sus botones.

La forma más fácil: **pedírselo a Claude** — "agrega mi nuevo aplicativo X al portal".

## ¿Cómo se publica en internet?

El proyecto está pensado para Vercel (igual que los demás aplicativos):

1. Subir esta carpeta a un repositorio de GitHub llamado `aplicativos-titoia`.
2. En Vercel: "Add New Project" → importar ese repositorio → Deploy.
3. Quedará publicado en `https://aplicativos-titoia.vercel.app/`.

Después de eso, **cada cambio que se suba a GitHub se publica solo** en la página,
sin hacer nada más.

## Archivos

| Archivo | Qué es | ¿Se edita? |
|---|---|---|
| `apps-data.js` | La lista de aplicativos y categorías | ✅ Sí — es el único que se toca |
| `index.html` | La estructura de la página | Solo para cambios de diseño |
| `styles.css` | Los colores y el diseño | Solo para cambios de diseño |
| `app.js` | La lógica que arma la página | No |
