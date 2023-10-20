// Modulos de REACT 
import { BsCart } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// Estilos
import './style.css';

// Componentes propios
import { CartContext } from '../../context/CartContex';

function CartWidget() {
  //Logica
  const { cantidadEnCarrito } = useContext (CartContext)

  //Renderizado
  return (
    <Link to= "/carrito" className='NavBar__CartWidget'>
      <BsCart size="25px"/>
     {cantidadEnCarrito() > 0 && <p className='NavBar__CartWidget--p'>{cantidadEnCarrito()}</p>}
    </Link>
  );
};

export default CartWidget;