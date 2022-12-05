import React from 'react'
import './style.scss'
import logo from '../img/logo.png'
import fondo from '../img/fondo.png'
import { useNavigate } from 'react-router'
import { actionLogoutAsync } from '../redux/actions/userAction'
import { useDispatch } from 'react-redux'
const Main = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleNavigate = (direction) => {
    navigate(`/${direction}`)
  }
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };
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
    <p onClick={()=>{handleNavigate('login')}}>Login</p>
    <button onClick={logOut}>Logout</button>
</div>
    </nav>
    <img src={fondo} className='imgFondo'/>
    <div className='header__frase'>NO ESTÁS SOLO</div>
    <div className='header__circulo'>
    <div className='header__circulo__sombra'></div>
    
    ¿Necesitas ayuda?
     </div>
     <div className='header__text'>Aprende cómo mantenerte seguro, superar una crisis y encontrar tratamiento.</div>
</header>
  )
}

export default Main