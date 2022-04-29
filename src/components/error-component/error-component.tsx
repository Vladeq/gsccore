import styled, { css } from 'styled-components';

interface ErrorProps {
  err: any;
}

function ErrorComponent({ err }: ErrorProps): JSX.Element {
  return (
    <div>
      <Text>{err}</Text>
    </div>
  );
}
const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.sizes.small}rem;
    font-weight: 700;
    line-height: 3rem;
    margin: 0;
  `}
`;
export default ErrorComponent;
