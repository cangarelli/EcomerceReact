//Compnentes de react
import React from 'react'
import { Link } from 'react-router-dom';

//Estilos
import "./style.css"

//Modulos Propios
import { Logo,  CartWidget, SubTitle } from "../componentBarrel"

import logoMarca from "../../assets/png/Logo-marca.png"

const NavBar = (props) => {
    
  return (
    <div className="navMarco">
        <div className="navBar" >
            <div className='conteiner'>
                <Link to= {"/"}> 
                    <Logo src= {logoMarca} alt= "Icono de acceso a pagina princial" />
                </Link>
                
                <ul className='__optionConteiner'>
                    <li className="__option">
                        <Link to= "/category/pantalones">
                            Pantalones
                        </Link>
                    </li>
                    <li className="__option">
                        <Link to= "/category/medias">
                            Medias
                        </Link>
                    </li>
                    <li className="__option">
                        <Link to= "/category/remeras">
                            Remeras
                        </Link> 
                    </li>
                    <li className="__option">
                        <Link to= "/category/buzos">
                            Buzos
                        </Link> 
                    </li>
                </ul>
                <Link to= "/contacto">
                    <SubTitle texto="Contacto"/>
                </Link>
                <CartWidget  />
            </div>
        </div>
    </div>
  );
};

export default NavBar;