import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/1581704670044-attachment.svg';

function SignUp() {
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <form>
                <input placeholder="Insira seu nome" />
                <input type="email" placeholder="Insira seu email" />
                <input type="password" placeholder="Insira sua senha" />
                <button type="submit"> Criar conta </button>
                <Link to="/"> Já sou cadastrado</Link>
            </form>
        </>
    );
}

export default SignUp;
