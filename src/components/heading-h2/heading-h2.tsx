import styled, { css } from 'styled-components';

interface HeadingProps {
  text: string;
}
function HeadingH2({ text }: HeadingProps): JSX.Element {
  return <Title>{text}</Title>;
}

const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.title}rem;
    font-weight: 700;
    line-height: 3rem;
    margin: 0.5rem;
  `}
`;

export default HeadingH2;
