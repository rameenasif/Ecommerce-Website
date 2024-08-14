import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './ProjectComponents/Navbar.jsx'
import HomePage from './Pages/HomePage.jsx'
import ProductCards from './ProjectComponents/ProductCards.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenProducts from './ProjectComponents/MenProducts.jsx'
import WomenProducts from './ProjectComponents/WomenProducts.jsx'
import KidsProducts from './ProjectComponents/KidsProducts.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'
import Footer from './ProjectComponents/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    
  
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductCards />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/kids" element={<KidsProducts />} />
        </Routes>
        <Footer/>
        
      </CartProvider>
    </Router>
  );

  
  
}

export default App
