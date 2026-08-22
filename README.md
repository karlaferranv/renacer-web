# RENACER — Página de venta

Guía simple, sin necesidad de saber programar.

## 1. ¿Dónde cambio los precios y los links de pago?

Todo está en **un solo archivo**:

```
src/config/siteConfig.js
```

Ábrelo con cualquier editor de texto (o directamente en GitHub, editando el
archivo desde el navegador) y cambia:

- `prices` → los números que se muestran en la página.
- `checkout` → pega aquí tu link de Hotmart o Cuanto para cada programa.
  Mientras el link esté vacío (`''`), el botón abrirá WhatsApp automáticamente
  con un mensaje predefinido, para que nunca pierdas una venta.
- `available` → pon `false` si un programa aún no está a la venta (se mostrará
  "Próximamente" en vez del botón).
- `social` → tu Instagram, TikTok, WhatsApp y correo.

Guarda el archivo. Eso es todo — no necesitas tocar ningún otro archivo.

## 2. ¿Dónde pongo mis fotos?

Busca en el código los siguientes textos entre corchetes y reemplázalos por
tus imágenes reales (puedes pedirle a un desarrollador o a mí que lo haga
por ti más adelante):

- `[FOTO_KARLA]` en `src/components/AboutKarla.jsx`
- `[IMAGEN_AMATE]` en `src/components/AmateSection.jsx`
- `[IMAGEN_ARTE_ENERGIA]` en `src/components/EnergiaSection.jsx`
- `[IMAGEN_MAGNETICA]` en `src/components/MagneticaSection.jsx`

También hay 3 testimonios de ejemplo en `src/components/Testimonials.jsx`
marcados como `[TESTIMONIO_1]`, `[TESTIMONIO_2]`, `[TESTIMONIO_3]` —
reemplázalos por testimonios reales de tus alumnas antes de publicar.

Para la imagen que se comparte en WhatsApp/Instagram (og-image), coloca un
archivo llamado `og-image.jpg` (1200x630px) dentro de la carpeta `public/`.

## 3. Probarla en tu computadora (opcional, antes de publicar)

Necesitas tener instalado **Node.js** (descárgalo gratis en nodejs.org, versión LTS).

Luego, abre la Terminal (Mac) o el símbolo del sistema (Windows) dentro de la
carpeta del proyecto y escribe, una línea a la vez:

```
npm install
npm run dev
```

Se abrirá un link (algo como `http://localhost:5173`) que puedes abrir en tu
navegador para ver la página en vivo. Cada cambio que guardes se actualiza solo.

## 4. Subir el proyecto a GitHub

1. Crea una cuenta gratis en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo (botón verde "New").  Ponle de nombre, por
   ejemplo, `renacer-web`. Déjalo público o privado, como prefieras.
3. Sigue las instrucciones que GitHub te muestra bajo "…or push an existing
   repository from the command line", que se verán parecidas a esto (ejecuta
   cada línea en la Terminal, dentro de la carpeta del proyecto):

```
git init
git add .
git commit -m "Primera versión de RENACER"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/renacer-web.git
git push -u origin main
```

Si nunca has usado `git`, descárgalo primero desde git-scm.com.

## 5. Publicarla gratis en Vercel

1. Entra a [vercel.com](https://vercel.com) y crea una cuenta gratis
   (puedes usar tu cuenta de GitHub para entrar directo).
2. Haz clic en **"Add New… → Project"**.
3. Selecciona el repositorio `renacer-web` que acabas de subir a GitHub.
4. Vercel detecta automáticamente que es un proyecto Vite — no cambies
   ninguna configuración, solo haz clic en **"Deploy"**.
5. En 1-2 minutos tendrás un link público como `renacer-web.vercel.app`
   con tu página ya publicada.

## 6. Cambiar tu dominio propio más adelante

Cuando tengas tu dominio (por ejemplo, `renacer.com`):

1. Dentro de tu proyecto en Vercel, ve a **Settings → Domains**.
2. Escribe tu dominio y sigue las instrucciones que Vercel te da para
   apuntar tu dominio (normalmente agregar unos registros DNS donde
   compraste el dominio: GoDaddy, Namecheap, etc.).
3. Vercel se encarga del certificado de seguridad (https) automáticamente.

## 7. Reemplazar los links de Hotmart / Cuanto más adelante

Vuelve al paso 1: abre `src/config/siteConfig.js`, pega el nuevo link en
`checkout`, guarda, y vuelve a subir el cambio a GitHub (`git add .`,
`git commit -m "actualizo links"`, `git push`). Vercel publicará la
actualización automáticamente en un par de minutos.

## 8. Analytics (Meta Pixel, Google Analytics, TikTok Pixel)

Cuando tengas tus IDs, ábrelos en `index.html` — ahí encontrarás un
comentario que indica exactamente dónde pegar cada script.

---

### Resumen de la arquitectura

- **React + Vite** — frontend puro, sin backend, sin base de datos.
- **Componentes** en `src/components/` — un archivo por sección de la página.
- **`src/config/siteConfig.js`** — el único archivo que necesitas editar
  para precios, links y redes.
- **Sin login, sin dashboard, sin checkout propio** — todos los botones de
  compra llevan a un checkout externo (Hotmart, Cuanto o WhatsApp).
- Estructura preparada para, en el futuro, añadir cuentas de usuario,
  membresías o contenido privado sin tener que rehacer la página.
