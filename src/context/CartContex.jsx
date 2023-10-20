// Componentes de React
import { createContext, useState } from "react";

//Componentes propios

export const CartContext = createContext();

export const CartProvider = (props) => {
  // Parametros
  const [carrito, setCarrito] = useState([]);
  
  // Logica
    const sesionSave = (clave, valor) => {
        const carritoJSON = JSON.stringify (valor);
        sessionStorage.setItem (clave, carritoJSON);
    };
    const sesionLoad = (clave) => {
        const arrayData = sessionStorage.getItem (clave);
        const carritoJSON = JSON.parse(arrayData);
       
        if (carritoJSON != null) {
            return (carritoJSON);
        }else {
            return carrito;
        }
    };

    const agregarAlCarrito = (item, count) =>{
        // Variables
        const itemAgregado = {...item, count};
        const carritoVirtual = [...carrito];

        // Chequeo
        const estaEnElCarrito = carritoVirtual.find((producto) => producto.id === itemAgregado.id)
        
        // Operación
        estaEnElCarrito ? 
        estaEnElCarrito.count += count 
        : carritoVirtual.push (itemAgregado);

        // Seteo de carrito
        setCarrito ([...carritoVirtual]);
    };
    const handleVaciar = () => {
        setCarrito ([])
        sesionSave("carrito", [])
      };
    const cantidadEnCarrito = () => {
        return carrito.reduce ((acc, prod) => acc + prod.count, 0);
    };

    const precioTotal = () => {
        return carrito.reduce ((acc, prod) => acc + prod.precio * prod.count, 0);
    };


// Renderizado
    return (
        <CartContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, sesionLoad, sesionSave, handleVaciar }} >
            {props.children}
        </CartContext.Provider>
    );
};

