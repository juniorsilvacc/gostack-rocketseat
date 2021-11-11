import React, { useCallback, useRef } from 'react'
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import {Link} from 'react-router-dom'

import logoImg from '../../assets/logo.svg';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import {Container, Content, Background, AnimationContainer} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async(data: object) => {
    try {

      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err: any) {
      console.log(err); 
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background/>
      
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça o seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft/>
            Voltar para o logon
            </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default SignUp
