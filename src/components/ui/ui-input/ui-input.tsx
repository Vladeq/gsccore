import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

function UIInput(props: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return <Input {...props} />;
}

const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
`;

export default UIInput;
