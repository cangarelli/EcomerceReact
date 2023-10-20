// Compnentes de React
import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";

// Estilos
import "./style.css";

// Components propios

import {  ProductCard } from "../componentBarrel";
import { CartContext } from '../../context/CartContex';

// Componente propiamente dicho
const ItemList = (props) => {
  //Parametros
  const {productlist} = props;

  // Logica
  const { carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal } = useContext (CartContext);

  // Renderizado
  return (
    <div className='itemList'>
      {productlist.map((producto) => {
        
        return (
          <ProductCard id={producto.id} producto={producto}/>
        )
      })}
    </div>
  ); 
};
  
  export default ItemList;