# ReactDOM

 ## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
 > [!TIP] 
  > 
  > Para crear un monorepositorio multipaquetes:
```terminal
npm init -y
```
  >[!TIP] 
  >Para crear una carpeta de proyectos: 
  ```terminal
mkdir projects
cd projects
```
  > [!TIP] 
  > Para crear un proyecto de VITE:
```terminal
npm create vite@latest
```
> [!NOTE] 
 >  visitar  https://vitejs.dev/


### Para correr un proyecto vite en local Host:
```terminal
npm run dev
```
   
  ### Para correr un proyecto en Network host hay que agregar codigo al vite.config
  > 

   #### vite.config.js _recuerda cambiar el port_
   ```javascript
 export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: "el puerto que eligas, por defecto: 5173" ,
    open: true,
  },
})
```
### Para usar million (render de react 70% más rapido)
```terminal
npm install million@ñatest
```

```javascript
 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({auto:true}),react()],
  server: {
    host: '0.0.0.0',
    port: "5173" ,
    open: true,
   },
})

```
 

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
> - [ ] en progreso...

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
> - DISEÑO: https://tailwindcss.com/


## 08-hook-usestate
Contenido: 
> - App Birthday Reminder
> - Uso de useState
> - Funciones como props
> - DISEÑO: https://tailwindcss.com/
> - Listar elementos de un array
> - Setear valores usando useState tocando un boton

## 09-hook-useeffect

Contenido:

> - App Advice Slip (muestra frases al tocar un boton)
> - Uso de useState
> - Funciones como props
> - useEffect con funciones asyn await

> - DISEÑO: https://tailwindcss.com/
> - Uso de una api: https://api.adviceslip.com/
> - Uso de libreria axios: https://axios-http.com/es/docs/intro
> - Uso de libreria spinner: https://www.npmjs.com/package/react-loader-spinner
> - Uso de web para iconos: https://heroicons.com/outline
> - Uso de web para colores con IA: https://tintmint.net/
> - Uso de web para fuentes: https://fonts.google.com/?query=roboto
>


## 10-react-router-dom
Contenido: 
>  [!WARNING]
>  INCOMPLETO
> - [ ] en progreso...

## 11-react-query
Contenido: 
>  - INFINITE SCROLL
> 
> - Libreria: https://tanstack.com/query/latest/docs/react/overview
```terminal
npm i @tanstack/react-query
```
plugin de eslint
```terminal
npm i -D @tanstack/eslint-plugin-query
```
en .eslintrc.cjs
```cjs
{
  "extends": ["plugin:@tanstack/eslint-plugin-query/recommended"]
}

```






  


