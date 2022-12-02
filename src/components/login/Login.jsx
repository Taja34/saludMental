import React from 'react'
import googleLogo from '../../assets/images/googleLogo.png'
import facebookLogo from '../../assets/images/facebookLogo.png'
import logoImage from '../../assets/images/logoImage.png'
import './login.scss'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()
    const buttonNavigate = (direction) => {
        navigate(`/${direction}`)
    }
  return (
    <div className='body'>
        <div className='mainLogin'>
            <section className='mainLogin__left'>
                <div className='mainLogin__leftTop'>
                    <figure>
                        <img src={logoImage} alt="Logo" />
                        <span>Ruta Mental</span>
                    </figure>
                </div>
                <div className='mainLogin__leftContent'>
                    <div className='mainLogin__leftContentTop'>
                        <h1>Inicia Sesión</h1>
                        <p>Inicia sesión con</p>
                        <div className='mainLogin__providers'>
                            <img src={googleLogo} alt="Google logo" />
                            <img src={facebookLogo} alt="Facebook logo" />
                        </div>
                        <div className='mainLogin__linesBox'>
                            <hr/>
                            <p>o</p>
                            <hr/>
                        </div>
                    </div>
                    <div className='mainLogin__leftContentForm'>
                        <form>
                            <div className='mainLogin__formInputs'>
                                <input type="text" placeholder='Email'/>
                                <input type="password" placeholder='Contraseña'/>
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className='mainLogin__right'>
                <div className='mainLogin__rightContainer'>
                    <h2>¿No tienes cuenta?</h2>
                    <div>
                        <button className='mainLogin__registerButton' onClick={()=>{buttonNavigate('register')}}>Regístrate</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Login