import React, { useCallback, useRef } from 'react'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import {Link} from 'react-router-dom';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {useAuth} from '../../hooks/auth'
import {useToast} from '../../hooks/toast';

import {Container, Content, Background, AnimationContainer} from './styles'


interface SignInFormData{
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const {signIn} = useAuth()
  const {addToast} = useToast()

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

      await signIn({
        email: data.email,
        password: data.password,
      })
    } catch (err: any) {
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      //disparar um toast
      addToast({
        type: 'error',
        title: 'Erro na autenticação.',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
      });
      
    }
  }, [signIn, addToast]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça o seu login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <Link to="/signup">
            <FiLogIn/>
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background/>
    </Container>
  )
}

export default SignIn
