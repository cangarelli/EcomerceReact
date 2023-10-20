// Componentes de react
import { React, useState } from 'react';

// Estilosc
import "./style.css";
import { Title } from '../componentBarrel';


// Componentes propios

const Contacto = () => {

    // Parametros
     const [valores, setValores] = useState({
        nombre: "",
        email: "",
        consulta: ""
    });

    // Logica
    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log ("Enviar", valores)
    };

    const handleForm = (e) => {
        setValores ({
            ...valores,
            [e.target.name]: e.target.value
        });
    };

    // Renderizado

  return (
    <div className='contacto'>
        <Title texto="CONTACTO" />

        <form className='form' onSubmit={handleSubmit}>
            <input type="text" className='input' name= "nombre" onChange={handleForm} placeholder='Escribi tu nombre' />
            <input type="email" className='input' name='email' onChange={handleForm} placeholder='Escribi tu email' />
            <input type="textarea" className='input' name='consulta' onChange={handleForm} placeholder='Escribi tu consulta' />

            <button className='enviar' type='submit'>Enviar</button>
        </form>
    </div>
  );
};

export default Contacto;