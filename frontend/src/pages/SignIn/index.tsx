import React, { useCallback, useRef } from 'react'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import {Form} from '@unform/web';

import {Container, Content, Background} from './styles'

import {useAuth} from '../../hooks/AuthContext'

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input'
import Button from '../../components/Button'
import { FormHandles } from '@unform/core';

interface SignInFormData{
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const {user, signIn} = useAuth()
  console.log(user)

  const handleSubmit = useCallback(async(data: SignInFormData) => {
    try {

      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha obrigatório'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password,
      })
    } catch (err: any) {
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors);
      }

      //disparar um toast
      
      
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
       <img src={logoImg} alt="GoBarber" />

       <Form onSubmit={handleSubmit} ref={formRef}>
         <h1>Faça o seu login</h1>

         <Input name="email" icon={FiMail} placeholder="E-mail" />

         <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

         <Button type="submit">Entrar</Button>

         <a href="forgot">Esqueci minha senha</a>
       </Form>

       <a href="forgot">
         <FiLogIn/>
         Criar conta
        </a>
      </Content>

      <Background/>
    </Container>
  )
}

export default SignIn
