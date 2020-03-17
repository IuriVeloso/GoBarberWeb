import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/1581704670044-attachment.svg';

function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form onSubmit={handleSubmit}>
                <Input name="name" placeholder="Insira seu nome" />
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
                <button type="submit"> Criar conta </button>
                <Link to="/"> Já sou cadastrado</Link>
            </Form>
        </>
    );
}

export default SignUp;
