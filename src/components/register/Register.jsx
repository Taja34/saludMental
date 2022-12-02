import React from 'react'
import { useNavigate } from 'react-router'
import logoImage from '../../assets/images/logoImage.png'
import './register.scss'

const Register = () => {
    const navigate = useNavigate()
    const buttonNavigate = (direction) => {
        navigate(`/${direction}`)
    }
  return (
    <div className='body'>
    <div className='mainRegister'>
        <section className='mainRegister__left'>
            <div className='mainRegister__leftTop'>
                <figure>
                    <img src={logoImage} alt="Logo" />
                    <span>Ruta Mental</span>
                </figure>
            </div>
            <div className='mainRegister__leftContent'>
                <div className='mainRegister__leftContentTop'>
                    <h1>Regístrate</h1>
                </div>
                <div className='mainRegister__leftContentForm'>
                    <form>
                        <div className='mainRegister__formInputs'>
                            <input type="text" placeholder='Nombre'/>
                            <input type="email" placeholder='Email'/>
                            <input type="password" placeholder='Contraseña'/>
                            <input type="password" placeholder='Confirmar contraseña'/>
                        </div>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </section>
        <section className='mainRegister__right'>
            <div className='mainRegister__rightContainer'>
                <h2>¿Ya tienes cuenta?</h2>
                <div>
                    <button className='mainRegister__registerButton' onClick={()=>{buttonNavigate('login')}}>Inicia sesión</button>
                </div>
            </div>
        </section>
    </div>
</div>
  )
}

export default Register