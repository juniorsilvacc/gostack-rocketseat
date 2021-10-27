import React from 'react'
import {FiLogIn} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

import {Container, Content, Background} from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background/>
      
      <Content>
       <img src={logoImg} alt="GoBarber" />

       <form>
         <h1>Faça o seu login</h1>

         <input placeholder="E-mail" />

         <input placeholder="Senha" type="password" />

         <button type="submit">Entrar</button>

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
