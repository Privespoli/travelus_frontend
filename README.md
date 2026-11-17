# ✈️ Travel Us

Aplicación web para planificar viajes en grupo y coordinar la información del viaje en un solo lugar.

🌐 **Aplicación:** [travelus-pri.vercel.app](https://travelus-pri.vercel.app)  
🔌 **API:** [travelus-backend.onrender.com](https://travelus-backend.onrender.com)

## Sobre el proyecto

Travel Us es una aplicación fullstack. El frontend presenta las páginas y los módulos de cada viaje; el backend expone una API para autenticar solicitudes y gestionar los datos. Supabase proporciona autenticación, base de datos PostgreSQL y almacenamiento de archivos.

## Funcionalidades

### Cuenta y perfil
- Registro e inicio de sesión con correo y contraseña.
- Confirmación de correo y solicitud de recuperación de contraseña.
- Cierre de sesión y rutas privadas para las áreas que requieren una cuenta.
- Perfil con fotografía, información personal y perfiles dependientes.

### Viajes
- Panel con las viajes disponibles para la cuenta.
- Crear viajes con nombre, destino, fechas e imagen.
- Consultar y actualizar el estado y las fechas de un viaje.
- Añadir integrantes por correo.

### Herramientas de viaje
- Itinerario con lugares, dirección, fecha y hora.
- Sugerir puntos de interés, votar y añadirlos al itinerario.
- Subir y consultar tickets y documentos.
- Registrar gastos, indicar quién pagó, seleccionar quién comparte el gasto y adjuntar comprobantes.
- Crear checklists e ítems marcables, y añadir notas.
- Guardar enlaces y enviar/responder mensajes.

### Contacto e información
- Formulario de contacto conectado con EmailJS.
- Páginas de condiciones de uso y privacidad.

## Tecnologías

| Capa | Tecnologías |
| --- | --- |
| Frontend | React 19, JavaScript, JSX y React Router 7 |
| Desarrollo y build | Vite 8 |
| Estilos | CSS y CSS Modules |
| Cliente HTTP | Axios |
| Autenticación, datos y archivos | API Express conectada a Supabase |
| Correo de contacto | EmailJS Browser SDK |
| Despliegue | Vercel (frontend) y Render (API) |

## Arquitectura

```text
Navegador
  ├── Frontend React + Vite (Vercel)
  ├── Axios → API Node.js + Express (Render), con token Bearer
  └── EmailJS → servicio de correo del formulario de contacto

API Express → Supabase Auth, PostgreSQL y Storage
```

El cliente Axios se define en `src/api.js`. Usa `VITE_API_URL` como URL base; si no existe, utiliza la URL de producción. Adjunta el token de sesión a las solicitudes y, ante una respuesta HTTP 401, limpia la sesión y vuelve al inicio.

## Requisitos

- Node.js **20.19+ o 22.12+** (requisito de Vite 8).
- npm.
- Un proyecto Supabase configurado para el backend.

## Ejecutar en local

El backend y el frontend se ejecutan en terminales separadas. Los comandos siguientes usan los repositorios de GitHub actuales.

### 1. Iniciar el backend

```bash
git clone https://github.com/Privespoli/travelus_backend.git
cd travelus_backend
npm install
```

Crea un archivo `.env` en la raíz del backend con la configuración de tu proyecto Supabase:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173
SUPABASE_URL=<URL del proyecto Supabase>
SUPABASE_ANON_KEY=<clave anon o publishable>
SUPABASE_SERVICE_KEY=<clave privilegiada, solo en el servidor>
```

El repositorio backend no contiene `.env.example`, así que crea el archivo localmente. Después inicia la API:

```bash
npm run dev
```

La API local queda normalmente en `http://localhost:3000`. Puedes abrir `http://localhost:3000/` para comprobar que responde.

### 2. Iniciar el frontend

Abre otra terminal:

```bash
git clone https://github.com/Privespoli/travelus_frontend.git
cd travelus_frontend
npm install
```

Crea `.env.local` en la raíz del frontend para conectar con la API local:

```env
VITE_API_URL=http://localhost:3000
```

Inicia Vite:

```bash
npm run dev
```

Abre la URL que muestre la terminal, habitualmente `http://localhost:5173`. Detén los servidores con `Ctrl+C`.

## Scripts del frontend

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo. |
| `npm run build` | Genera los archivos optimizados en `dist/`. |
| `npm run preview` | Previsualiza el build localmente; ejecuta primero `npm run build`. |
| `npm run lint` | Ejecuta ESLint. |

El frontend no tiene actualmente un script de pruebas automatizadas.

## Variables de entorno del frontend

| Variable | Uso |
| --- | --- |
| `VITE_API_URL` | URL base de la API. Para desarrollo local: `http://localhost:3000`. |
| `VITE_SUPABASE_URL` | Referenciada en `LoginForm.jsx`, pero el login activo se realiza a través de la API. |
| `VITE_SUPABASE_ANON_KEY` | Referenciada en `LoginForm.jsx`, pero el login activo se realiza a través de la API. |

El formulario de contacto configura EmailJS en `src/components/ContactForm.jsx`. Los valores `VITE_*` y la configuración que se envía al navegador son visibles para el usuario; no incluyas claves privadas ni credenciales de servidor en el frontend. Mantén los secretos de Supabase solo en el backend.

Los archivos `.env`, `.env.*` y `*.local` están ignorados por Git en este repositorio.

## Rutas de la aplicación

| Ruta | Acceso | Página |
| --- | --- | --- |
| `/` | Pública | Acceso y registro. |
| `/condiciones-de-uso` | Pública | Condiciones de uso. |
| `/privacidad` | Pública | Privacidad. |
| `/dashboard` | Con sesión | Panel de viajes. |
| `/viaje/:id` | Con sesión | Módulos de un viaje. |
| `/viaje/:id/mapa` | Con sesión | Puntos de interés. |
| `/perfil` | Con sesión | Perfil. |

`vercel.json` reescribe las rutas de la aplicación hacia `index.html`, necesario para que las rutas del navegador funcionen al recargar una página.

## Estructura principal

```text
src/
├── main.jsx                  # Entrada de React
├── App.jsx                   # Rutas públicas y protegidas
├── api.js                    # Cliente Axios e interceptores
├── context/AuthContext.jsx   # Estado de autenticación
├── pages/                    # Acceso, panel, perfil, viaje y legales
└── components/               # Módulos de viajes y contacto
```

## Despliegue

El frontend está publicado en Vercel. La URL principal configurada es `https://travelus-pri.vercel.app`. El backend está publicado en Render en `https://travelus-backend.onrender.com`. La API permite el origen del frontend principal y los puertos locales 5173 a 5176, según la configuración actual de CORS.

## Autora

Priscila Nunes.
