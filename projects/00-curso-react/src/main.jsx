import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import songs from './data/songs.js'
import SongView from './views/SongView.jsx'

const routes = [
  {
    path: "/",
      element: <App/>
  }
];

songs.forEach(songs =>{
  routes.push({
    path: songs.name,
    element: <SongView  songs={songs}/>
  })

})

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
