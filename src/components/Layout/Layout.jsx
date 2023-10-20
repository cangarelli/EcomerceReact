// Modulos de React
import { React, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Estillos
import "./style.css"

// Modulos propios
import { NavBar, Footer } from "../componentBarrel"
import { CartContext } from '../../context/CartContex'

const Layout = (props) => {
  // Parametros
  const {greetings} = props  
  const { sesionSave, sesionLoad, carrito, setCarrito } = useContext(CartContext);
  
  // Renderizado
  return (
    <div className='layout'>
        <NavBar greetings={greetings} />
        {
        useEffect(() => {
          return (setCarrito(sesionLoad ("carrito")))
        }, [])
      }
      {
        useEffect(() => {
          if (carrito.length > 0) {
            return (sesionSave ("carrito", carrito))
          }
        }, [carrito])
      }
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout;