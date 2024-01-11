# ReactDOM

 ## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
 > [!TIP] 
  > 
  > Para crear un monorepositorio multipaquetes: **npm init -y**
  >
  >Para crear una carpeta de proyectos: **mkdir projets** y **cd projects**
  > 
  > Para crear un proyecto de VITE: **npm create vite@latest** visitar  https://vitejs.dev/
  > 
  > Para correr un proyecto vite en local Host: **npm run dev**
  > 
  > Para correr un proyecto en Network host hay que agregar codigo al vite.config
  > 

   ### vite.config.js
 export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: **el puerto que eligas, por defecto: 5173** ,
    open: true,
  },
})
 

# **CONTENIDO DE LOS PROYECTOS:**


## 00-curso-react:
Contenido: 
> - Cards
> -  Estados
> - Rutas

## 01-react-auth0-intro:
Contenido: 
> - Autenticacion con auth0

## 02-react-upload:
Contenido: 
> - Subir archivos
> - Guardar archivos en la nube (firfebase)

## 03-audio-reproductor:
Contenido: 
> - Libreria para reproducir audio
> - Libreria: [madzad](https://github.com/madzadev/audio-player)https://github.com/madzadev/audio-player

## 04-consumir-apirest:
Contenido: 
>  [!WARNING]
>  INCOMPLETO
> - [x] en progreso...

## 05-generar-pdf:
Contenido: 
> - generar y descargar pdf
> - Inputs para editar pdf
> - Render preview del pdf
> - Libreria: https://react-pdf.org/

## 06-tanstak-table:
Contenido: 
> - Tablas
> - Botones para paginas de las tablas
> - Filtro input en tiempo real
> - LIbreria: https://tanstack.com/table/v8

## 07-todo-list:
Contenido: 
> - Aplicacion de todo
> - Uso de useState y useEffect
> - Funciones como props
> - DISEÑO: tailwind
> - Libreria: https://tailwindcss.com/

## 08-hook-usestate

  


