import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryProvider } from './context/CategoryContext.jsx';
import { CartProvider } from './context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CategoryProvider>
  </StrictMode>,
)
