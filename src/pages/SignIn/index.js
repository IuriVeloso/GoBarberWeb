import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/1581704670044-attachment.svg';

function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <form>
                <input type="email" placeholder="Insira seu email" />
                <input type="password" placeholder="Insira sua senha" />
                <button type="submit"> Entrar </button>
                <Link to="/register"> Desejo realizar cadastro</Link>
            </form>
        </>
    );
}

export default SignIn;
