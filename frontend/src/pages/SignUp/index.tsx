import React from 'react'
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

import {Form} from '@unform/web'

import {Container, Content, Background} from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUn: React.FC = () => {

  function handleSubmit(data: object): void{
    console.log(data);
  }

  return (
    <Container>
      <Background/>
      
      <Content>
       <img src={logoImg} alt="GoBarber" />

       <Form onSubmit={handleSubmit}>
         <h1>Faça o seu cadastro</h1>

         <Input name="name" icon={FiUser} placeholder="Nome" />

         <Input name="email" icon={FiMail} placeholder="E-mail" />

         <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

         <Button type="submit">Cadastrar</Button>
       </Form>

       <a href="forgot">
         <FiArrowLeft/>
         Voltar para o logon
        </a>
      </Content>
    </Container>
  )
}

export default SignUn
