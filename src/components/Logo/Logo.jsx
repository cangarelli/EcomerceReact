import React from 'react'


// Estilos
import "./style.css"

const Logo = (props) => {
  const {src, alt} = props
    return (
    <img src={src} alt={alt} className='logo' />
  )
}

export default Logo;