import styled, { css, CSSProp } from 'styled-components';

import GscoreLogo from './logo.svg';

interface LogoProps {
  className?: string;
  rootCSS?: CSSProp;
}
function Logo({ className, rootCSS }: LogoProps): JSX.Element {
  return (
    <Block className={className} $CSS={rootCSS}>
      <GscoreLogo />
    </Block>
  );
}

const Block = styled.div<{ $CSS?: CSSProp }>`
  ${({ $CSS }) => css`
    ${$CSS};
  `}
`;

export default Logo;
