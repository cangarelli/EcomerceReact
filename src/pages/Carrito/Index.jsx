// Componentes de react
import React, { useContext } from 'react';

// Estilos
import "./Carrito.css"

//Componentes propios
import { CartContext } from '../../context/CartContex';
import { Layout, CajaDeProductos, Title, SubTitle } from '../../components/componentBarrel';
import { Link } from 'react-router-dom';

const CarritoContenier = () => {
  //Parametros
  const { carrito, precioTotal, handleVaciar } = useContext (CartContext);
  //Logica

  // Renderizado
  return (
    <Layout>
       <div className='carrito'>

        { carrito.length != 0 ? 
        <div className='carritoCargado'>
          <Title texto= "CARRO DE COMPRAS" />
          <div className='listaDeProductos'>
            {
              carrito.map ((prod) => <CajaDeProductos producto={prod}/>)
            }
          </div>

          <SubTitle texto= {`Precio total: $${precioTotal()}`} />
          <div className='botonera'>
            <button className='boton' onClick={() => {handleVaciar()}}>Vaciar</button>
            <Link to= "/checkout">
              <button className='boton'>Finalizar compra</button>
            </Link>
          </div>
        </div>
        : <Title texto="No añadido ningún producto" />
        }
      </div>
    </Layout>
  );
};

export default CarritoContenier;