import React from 'react';
import Navbar from './common/Navbar';
import { Link } from 'react-router-dom';
import './common/Components.css';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='loginTitle'>Iniciar Sesión</h1>
            <form className='loginForm'>
                <div className="loginContainer">
                    <label className='loginLabel' name="userName">Usuario</label>
                    <input className='loginInput' type="text" name="userName"></input>
                </div>
                <div className="loginContainer">
                    <label className='loginLabel' name="password">Contraseña</label>
                    <input className='loginInput' type="password" name="password"></input>
                </div>
                <button className='loginSubmit' type='submit'>Ingresar</button>
            </form>
            <p className='registerText'>Aún no tienes cuenta? <Link className='registerLink' to='/register'>Registrate ahora.</Link></p>
        </div>
    );
};

export default Login;