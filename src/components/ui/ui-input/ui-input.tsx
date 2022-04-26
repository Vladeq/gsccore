import { InputHTMLAttributes } from 'react';
import styled, { CSSProp } from 'styled-components';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  rootCSS?: CSSProp;
}
function UIInput({
  className,
  rootCSS,
  onChange,
  placeholder,
  value,
  name,
  onBlur,
  onFocus,
}: InputProps): JSX.Element {
  return (
    <Input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}

const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
`;

export default UIInput;
