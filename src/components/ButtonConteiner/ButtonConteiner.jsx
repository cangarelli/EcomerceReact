// Componentes de react
import { React, useState } from 'react'
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs"

// Estilos
import "./style.css"


// Componentes propios
import { CartContext } from '../../context/CartContex';

const ButtonConteiner = (props) => {

  // Parametros
  const {stock, count, setCount } = props;

  // Logica


  const handleCartAdd = () => {
    setCount (count + 1)
  };
  const handleCartRemove = () => {
    setCount (count - 1)
  };
  // Renderizado

  return (
    <div className="butonConteiner" >
      {
        stock > count ? 
        <button onClick={handleCartAdd} className="__button" ><BsFillCartPlusFill /></button> 
        : <button disabled className="__button"><BsFillCartPlusFill /></button>
      }
      {props.children}
      {
        count > 0 ?
        <button onClick={handleCartRemove} className="__button"> <BsFillCartDashFill /> </button>
        : <button disabled className="__button"> <BsFillCartDashFill /> </button>
      }
    </div>
  )
}

export default ButtonConteiner