import styled, { css, CSSProp } from 'styled-components';
interface PointerProps {
  className?: string;
  color?: string;
  text: string;
  rootCSS?: CSSProp;
}
function StagePointer({ color, text, className, rootCSS }: PointerProps): JSX.Element {
  return (
    <Heading className={className} $color={color} $CSS={rootCSS}>
      <Text>{text}</Text>
    </Heading>
  );
}

const Heading = styled.div<{ $color: string; $CSS?: CSSProp }>`
  ${({ $color, $CSS }) => css`
    border-bottom: 5px solid ${$color};
    border-radius: 2px;
    ${$CSS};
  `};
`;

const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    font-weight: 500;
    line-height: 1.2rem;
  `}
`;

export default StagePointer;
