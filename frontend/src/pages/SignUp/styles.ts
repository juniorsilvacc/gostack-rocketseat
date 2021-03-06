import styled, {keyframes} from 'styled-components'
import {shade} from 'polished';

import SignUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 700px;
`

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromRight} 1s;

  form{
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }

    a{
      color: #F4EDE8;
      display: block;
      text-decoration: none;
      margin-top: 24px;
      transition: color 200ms;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')}
      }
    } 
  }

  > a {
    color: #FF9000;
    display: block;
    text-decoration: none;
    margin-top: 24px;
    transition: color 200ms;

    display: flex;
    align-items: center;

    &:hover{
      color: ${shade(0.2, '#FF9000')}
    }

    svg{
      margin-right: 16px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackground}) no-repeat;
  background-size: cover;
`