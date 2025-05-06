# AngularDrawGenNew

🧩 **Generador de Frontend Angular a partir de Entradas Visuales (Nivel Rudimentario)**  
Este proyecto busca agilizar el desarrollo de interfaces empresariales en Angular, generando automáticamente el código desde entradas gráficas tipo boceto o canvas, con funcionalidad colaborativa en tiempo real.

---

## 🎯 Objetivo

Facilitar la creación rápida de interfaces frontend tipo ERP (Inventario, Contabilidad, etc.) para desarrolladores, generando **proyectos Angular funcionales y modulares**, listos para instalación y ejecución.

---

## 🚀 Características Principales

### 🧱 Entrada Visual (Rudimentaria)
- El usuario dibuja un formulario desde un canvas (como en Figma).
- Se interpreta el diseño en tiempo real y se genera código Angular automáticamente.

### 👥 Colaboración en Tiempo Real
- Basado en [Liveblocks](https://liveblocks.io/) para multiusuario.
- Invita compañeros por correo y colabora simultáneamente en el diseño.
- Vista de salas compartidas en tiempo real (`/dashboard`).

### ⚙️ Generación Angular
- Utiliza **Angular 17** como framework base.
- Diseño responsivo con **Angular Material o Bootstrap**.
- CRUD generado automáticamente desde bocetos.
- Se crea un `.zip` con la estructura Angular y un script de instalación.

---

## 🧠 IA y Reconocimiento de Bocetos

- IA de Google Gemini utilizada para interpretar elementos del canvas.
- Entrenamiento a través de prompts enviados desde el archivo `Canvas.tsx`.
- API Key obtenida desde: [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)

---

## 📦 Estructura del Proyecto

```bash
/src
│
├── angular-generator/          # Generador del proyecto Angular
│   └── useAngularProjectGenerator.tsx
│       - JSZip para compresión .zip
│       - generatePackageJson()
│       - generateAppTemplate() ← clave para capturar y traducir el canvas
│
├── canvas/                     # Componentes visuales (rectángulo, texto, etc.)
│   └── Canvas.tsx              # Captura el diseño y gestiona IA
│
├── liveblocks/                 # Colaboración en tiempo real (WebSockets)
│
├── prisma/                     # Base de datos y esquemas (SQLite / PostgreSQL)
│   └── schema.prisma
│
└── env.js / .env               # Configuración de claves (Liveblocks, IA, DB)
