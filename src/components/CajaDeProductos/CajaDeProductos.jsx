// Componentes de react
import { React, useContext } from 'react';

// Estilos
import "./style.css"

//Componentes propios
import { DescriptionText, SubTitle } from '../componentBarrel';

const CajaDeProductos = (props) => {
  // Propiedades
  const { producto } = props;
  
  // Renderizado
  return (
    <div className='cajaProductos' key={producto.id}>
      <SubTitle texto={producto.titulo} />
      <DescriptionText data={`El precio unitario es: $${producto.precio}`}/>
      <DescriptionText data={`Cantidad: ${producto.count} - Costo paquete: $${producto.precio * producto.count}`}/>
    </div>
  );

};

export default CajaDeProductos;