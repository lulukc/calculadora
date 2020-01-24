import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  background: ${props => (props.operator ? '#ffa500' : '#ccc')};
  cursor: pointer;
  border-style: none;
  border: solid 1px #333;
  color: ${props => (props.operator ? '#fff' : '#333')};
  grid-column: ${props => (props.mesclar ? `span ${props.mesclar}` : 'span 1')};
  :active {
    background-color: ${props =>
      props.operator ? darken(0.1, '#ffa500') : darken(0.1, '#ccc')};
  }
`;
