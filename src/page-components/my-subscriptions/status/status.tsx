import styled, { css, CSSProp } from 'styled-components';

interface StatusProps {
  text: string;
  className?: string;
  rootCSS?: CSSProp;
}
function Status({ text, className, rootCSS }: StatusProps): JSX.Element {
  return (
    <Text $CSS={rootCSS} className={className} $text={text}>
      {text}
    </Text>
  );
}

const Text = styled.p<{ $CSS?: CSSProp; $text: string }>`
  ${({ $CSS, theme, $text }) => css`
    font-size: ${theme.sizes.small};
    font-weight: 700;
    line-height: 28px;
    color: ${theme.colors.status[$text]};
    ${$CSS};
  `}
`;

export default Status;
