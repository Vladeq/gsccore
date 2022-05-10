import styled, { css, CSSProp } from 'styled-components';

import { GscoreLogo } from '../../assets/svg-react';

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
