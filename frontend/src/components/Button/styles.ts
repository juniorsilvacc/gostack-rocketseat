import styled from 'styled-components'
import {shade} from 'polished';

export const Container = styled.button`
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
`