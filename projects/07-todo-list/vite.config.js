import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4321,
    open: true,
    allowedHosts: [], // Asegúrate de que sea la IP correcta
   
  },
})
