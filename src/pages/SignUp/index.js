import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/1581704670044-attachment.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('O campo email é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter mais de 6 caracteres')
        .required('A senha é obrigatória'),
    name: Yup.string()
        .min(10, 'Insira seu nome completo')
        .required('O nome é obrigatório')
});

function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form schema={schema} onSubmit={handleSubmit}>
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
