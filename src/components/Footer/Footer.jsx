//Compnentes de react
import React from 'react'

//Estilos
import "./style.css"

// Componentes propios
import facebookIcon from "../../assets/png/Icono-facebook.png"
import instagramIcon from "../../assets/png/Icono-instagram.png"
import mailIcon from "../../assets/png/Icono-mail.png"

import { Logo }  from '../componentBarrel';

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='iconContainer'>
      <Logo src={facebookIcon} alt="Icono de facebook" />
      <Logo src={instagramIcon} alt="Icono de instagram" />
      <Logo src={mailIcon} alt="Icono de mail" />
      </div>
    </div>
  )
};

export default Footer;