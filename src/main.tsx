import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import ProductContextProvider from './connext/product.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Toaster } from './components/ui/toaster.tsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './store/users.tsx'


const clentQuery = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={clentQuery}>
    <UserProvider>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </UserProvider>
  </QueryClientProvider>


)
