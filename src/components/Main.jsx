import React from 'react'
import './style.scss'
import logo from '../img/logo.png'
import fondo from '../img/fondo.png'
const Main = () => {
  return (
<header>
    
    <nav className='navbar'> 
    <div className='navbar__iconos'>
    <img src={logo} className='navbar__logo'/>
    <p>Nombre</p>
</div>
<div className='navbar__links'>
    <p>HOME</p>
    <p>HELP</p>
    <p>INFORMATION</p>
    <p>EXERCISES</p>
</div>
    </nav>
    <img src={fondo} className='imgFondo'/>
    <div className='header__frase'>NO ESTAS SOLO</div>
    <div className='header__circulo'>
    <div className='header__circulo__sombra'></div>
    
    ¿Necesitas ayuda?
     </div>
</header>
  )
}

export default Main