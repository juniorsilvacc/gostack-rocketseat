import React, { useCallback, useRef } from 'react'
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import {Link, useHistory} from 'react-router-dom';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {useToast} from '../../hooks/toast'

import {Container, Content, Background, AnimationContainer} from './styles';

import api from '../../services/apiClient';

interface SignUpFormData{
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const {addToast} = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async(data: SignUpFormData) => {
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

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu logon no GoBarber'
      })

    } catch (err: any) {
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      //disparar um toast
      addToast({
        type: 'error',
        title: 'Erro no cadastro.',
        description: 'Ocorreu um erro ao fazer o cadastro, tente novamente.'
      });
    }
  }, [addToast, history]);

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
