import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
function App() {
 const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App
