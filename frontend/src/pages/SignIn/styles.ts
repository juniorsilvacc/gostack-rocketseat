import styled from 'styled-components'
import {shade} from 'polished';

import SignInBackground from '../../assets/sign-in-background.png';

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

  form{
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }

    input{
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #F4EDE8;

      & + input{
        margin-top: 10px;
      }
    }

    button{
      background: #FF9000;
      color: #312E38;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background 200ms;

      &:hover{
        background: ${shade(0.2, '#FF9000')};
      }
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
  background: url(${SignInBackground}) no-repeat;
  background-size: cover;
`