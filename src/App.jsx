// Componentes de React
import { useEffect, useContext } from 'react'

// Estilos
import './App.css';

// Componentes propios
import Navegador from './routes/Navegador'
import {CartContext, CartProvider }from './context/CartContex'


// Componente
function App() {

  
  //Renderizado
  return (
    <CartProvider>
      <Navegador />
    </CartProvider>
  );
};

export default App;
