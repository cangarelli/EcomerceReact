// Componentes de React
import {React, useState, useContext} from 'react';

// Estilos
import "./style.css";

//Componentes propios

import { ButtonConteiner, DescriptionText, SubTitle, Title } from '../componentBarrel';
import { CartContext } from '../../context/CartContex';

export const ProductDetail = (props) => {
    // Parametros
    const { product } = props;
    const { imagen, titulo, precio, descripcion, stock } = product;
    const [count, setCount] = useState(0)


    //Logica
    const { agregarAlCarrito } = useContext(CartContext)
    
    //Renderizado
    return (

    <div className='productBox'>
        <div className='productDetail'>
            <img className= "--img" src={imagen} alt={titulo} />
            <div className='__infoBox'>
                <Title texto= {titulo} />
                <SubTitle texto= {`$${precio}`} />
                <DescriptionText data= {descripcion} />
                <p>{`Quendan ${stock}`}</p>
            </div>
            <ButtonConteiner stock={stock} count={count} setCount={setCount} >
                <DescriptionText data={`Agregar ${count}`} />
            </ButtonConteiner>
        </div>
        {count > 0 && <button className='cartAddButton' onClick= {() => {agregarAlCarrito(product, count)}} > AÑADIR AL CARRITO </button>}
    </div>
  )
}

export default ProductDetail;