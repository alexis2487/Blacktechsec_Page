# Blacktechsec_Page

¡Bienvenido al repositorio de **Blacktechsec_Page**!

Este proyecto es la página web oficial de Blacktechsec, una empresa dedicada a la ciberseguridad, tecnología y soluciones digitales. Aquí encontrarás el código fuente, recursos y documentación necesarios para desplegar, personalizar y contribuir al sitio web.

## Novedades
- Se añadió una sección de **Foro de Noticias**, accesible desde el botón en la página principal, donde próximamente se publicará contenido informativo.
 
## Desarrollo local
Instrucciones rápidas para optimizar la imagen de perfil, servir el sitio localmente y comprobar los cambios:

- Optimizar/resizar la imagen de perfil (requiere ImageMagick):

	PowerShell:

	```powershell
	.\optimize-images.ps1
	```

	Esto generará `img/profile-800.jpg` y `img/profile-480.jpg` a partir de `img/profile.jpg`.

- Servir el sitio localmente (requiere Python 3):

	```powershell
	.\run_local.ps1
	```

	Esto inicia un servidor en `http://localhost:8000` y abre el navegador.

Alternativas: instalar la extensión "Live Server" en VS Code y usarla para abrir la carpeta.

Mejoras aplicadas en el repo:

- Extracción de CSS a `styles.css` y carga no bloqueante.
- Script `main.js` separado para la lógica JS.
- Metadatos SEO y Twitter Card añadidos en `index.html`.
- `picture` + `srcset` preparado en `index.html` para imágenes responsivas.
- Scripts: `optimize-images.ps1`, `run_local.ps1` para ayudar pruebas locales.

