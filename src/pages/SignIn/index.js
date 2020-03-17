import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/1581704670044-attachment.svg';

function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    placeholder="Insira seu email"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Insira sua senha"
                />
                <button type="submit"> Entrar </button>
                <Link to="/register"> Desejo realizar cadastro</Link>
            </Form>
        </>
    );
}

export default SignIn;
