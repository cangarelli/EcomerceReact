// Modulos de REACT
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Modulos Propios
import { Home, ItemListCategory, ItemDetail, Consultas, Carrito, CheckOut } from '../pages/pagesBarrel';


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/item/:productid",
      element: <ItemDetail/>,
    },
    {
      path: "/category/:id",
      element: <ItemListCategory/>,
    },
    {
      path: "/contacto",
      element: <Consultas/>,
    },
    {
      path: "/carrito",
      element: <Carrito/>,
    },
    {
      path: "/checkout",
      element: <CheckOut/>,
    }
  ]);

// Componente
const Navegador = () => {

  return (
    <RouterProvider router={routes} />
  )
};

export default Navegador;