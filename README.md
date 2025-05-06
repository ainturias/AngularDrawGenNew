🧩 AngularDrawGenNew

Generador de Frontend Angular a partir de Entradas Visuales (Nivel Rudimentario)

Este proyecto busca agilizar el desarrollo de interfaces empresariales en Angular, generando automáticamente el código desde entradas gráficas tipo boceto o canvas, con funcionalidad colaborativa en tiempo real.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 OBJETIVO

Facilitar la creación rápida de interfaces frontend tipo ERP (Inventario, Contabilidad, etc.) para desarrolladores, generando proyectos Angular funcionales y modulares, listos para instalación y ejecución.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛠️ CARACTERÍSTICAS PRINCIPALES

🔹 ENTRADA VISUAL (RUDIMENTARIA)
• El usuario dibuja un formulario desde un canvas (como en Figma).
• Se interpreta el diseño en tiempo real y se genera código Angular automáticamente.

🔹 COLABORACIÓN EN TIEMPO REAL
• Basado en Liveblocks para multiusuario.
• Permite invitar compañeros por correo.
• Colaboración simultánea dentro de salas compartidas.
• Vista de tablero en /dashboard.

🔹 GENERACIÓN ANGULAR
• Angular 17 como framework base.
• Diseño responsivo con Angular Material o Bootstrap.
• CRUD generado automáticamente desde bocetos.
• Se crea un archivo .zip con estructura Angular + script de instalación.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 IA Y RECONOCIMIENTO DE BOCETOS

• Se utiliza Gemini IA de Google para interpretar elementos del canvas.
• Interacción mediante prompts desde el archivo Canvas.tsx.
• API Key obtenida desde: https://aistudio.google.com/apikey

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗂️ ESTRUCTURA DEL PROYECTO

📁 /src
├── 📁 angular-generator/
│   └── useAngularProjectGenerator.tsx
│       • JSZip para empaquetado
│       • generatePackageJson()
│       • generateAppTemplate() ← clave para capturar y traducir el canvas
│       • Recorre el diseño, copia atributos, dimensiones y estilos

├── 📁 canvas/
│   • Componentes visuales: rectángulos, textos, etc.
│   • Canvas.tsx: núcleo visual e integración con Gemini IA

├── 📁 liveblocks/
│   • WebSockets y funcionalidad colaborativa

📁 /prisma/
• schema.prisma: definición de base de datos

🧾 .env
• Claves privadas: Liveblocks y Gemini

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 AUTENTICACIÓN

• Registro obligatorio (/signup) antes de usar el sistema
• Contraseña mínima: 8 caracteres

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 INSTALACIÓN Y USO

📌 Paso 1: Instalar dependencias
npm install

📌 Paso 2: Configurar base de datos con Prisma
npm run db:push
npm run db:studio

📌 Paso 3: Ejecutar el proyecto en Next.js
npm run dev

📌 Paso 4: Descomprimir y ejecutar el Angular generado
npm install      ← dentro del proyecto generado
ng serve         ← requiere Angular CLI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 TIPS DE USO

• Eliminar elementos del canvas: usar tecla ← (retroceso), no “Suprimir”
• Para invitar a un compañero: añadir correo → abrir en nueva ventana
• Bug conocido: conteo incorrecto de salas/invitados (visual)
• Para subir boceto: crear trabajo → seleccionar "Boceto a diseño"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ TECNOLOGÍAS UTILIZADAS

• ⚛️ Next.js con Tailwind CSS
• 🅰️ Angular 17
• 🖼️ CanvasJS (W3Schools)
• 🔁 Liveblocks (Sockets)
• 🧬 Prisma (ORM)
• 📦 JSZip (.zip generator)
• 🤖 Gemini IA (Google)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧰 CONSIDERACIONES TÉCNICAS

• Proyecto preparado para conexión a REST API (futuro)
• Almacenamiento local funcional (sin base de datos real)
• Arquitectura modular, lista para mantenimiento o escalado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ESTADO ACTUAL

✅ Entrada rudimentaria funcional
✅ Edición colaborativa en tiempo real
✅ Generación básica de código Angular
⏳ Reconocimiento de imágenes y diagramas (en desarrollo)
⏳ Preparación para integración backend

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 LICENCIA

Proyecto educativo y de desarrollo personal.
Usa tecnologías y librerías opensource.
Libre de uso con fines no comerciales.

👨‍💻 Desarrollado por: ainturias
🔗 https://github.com/ainturias
