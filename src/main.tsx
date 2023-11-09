import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductContextProvider from './connext/product.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <ProductContextProvider>
    <App />
  </ProductContextProvider>

)
