// Componentes de react
import { React, useContext, useState  } from 'react';
import { collection, addDoc } from 'firebase/firestore';

// Estilos
import "./CheckOut.css"
import { CartContext } from '../../context/CartContex';
import { Layout, SubTitle, Title } from '../../components/componentBarrel';
import { db } from '../../firebase/config';
// Componentes propios

const CheckOut = () => {
  // Parametros
  const { carrito, precioTotal, handleVaciar } = useContext (CartContext);
  const [idPedido, setIdPedido ] = useState ("");
  const [clientData, setClientData] = useState({
    nombre: "",
    email: "",
  });
  

  // Logica
  const handleSubmit = (e) => {
    // Gestion de formulario
    e.preventDefault ();
    const pedido = {
      cliente: clientData,
      productos: carrito,
      total: precioTotal()
    }
    // Gestion de Firebase
    const refPedidos = collection (db, "pedidos")
    addDoc (refPedidos, pedido)
      .then((doc) =>{
        setIdPedido(doc.id);
        handleVaciar();
      })
  };

  const handleForm = (e) => {
    setClientData ({
        ...clientData,
        [e.target.name]: e.target.value
    });
  };

  // Renderizado
  if (idPedido) {
    return (
      <Layout>
        <div className='checkOut'>
          <Title texto="Felicidades, seguro estas contento por la ropa"/>
          <SubTitle texto= {`El numero de tu pedido es ${idPedido}`} />
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className='checkOut'>
          <Title texto="CHECKOUT" />

          <form className='checkForm' onSubmit={handleSubmit}>
            <input type="text" className='input' name= "nombre" onChange={handleForm} placeholder='Escribi tu nombre' />
            <input type="email" className='input' name='email' onChange={handleForm} placeholder='Escribi tu email' />

            <button className='buyButton' type='submit'>Comprar</button>
          </form>
        </div>
      </Layout>
    );
  };
};

export default CheckOut;