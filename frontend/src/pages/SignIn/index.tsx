import React from 'react'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

import {Container, Content, Background} from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background/>
      
      <Content>
       <img src={logoImg} alt="GoBarber" />

       <form>
         <h1>Faça o seu login</h1>

         <Input name="email" icon={FiMail} placeholder="E-mail" />

         <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

         <Button type="submit">Entrar</Button>

         <a href="forgot">Esqueci minha senha</a>
       </form>

       <a href="forgot">
         <FiLogIn/>
         Criar conta
        </a>
      </Content>
    </Container>
  )
}

export default SignIn
