import React from 'react';
import Navbar from './common/Navbar';
import './common/Components.css';

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='loginTitle'>Registrarme</h1>
            <form className='loginForm'>
                <div className="loginContainer">
                    <label className='loginLabel' name="userName">Usuario</label>
                    <input className='loginInput' type="text" name="userName"></input>
                </div>
                <div className="loginContainer">
                    <label className='loginLabel' name="password">Contraseña</label>
                    <input className='loginInput' type="password" name="password"></input>
                </div>
                <button className='loginSubmit' type='submit'>Registrar</button>
            </form>
        </div>
    );
};

export default Register;