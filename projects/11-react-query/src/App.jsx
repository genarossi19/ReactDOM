import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import PokemonList from './components/PokemonList'
function App() {
 const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App
