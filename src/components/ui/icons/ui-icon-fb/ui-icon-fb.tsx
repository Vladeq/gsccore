import styled from 'styled-components';

import Facebook from './facebook.svg';

function UIIconFb(): JSX.Element {
  return (
    <Heading>
      <Facebook />
    </Heading>
  );
}
const Heading = styled.div`
  padding: 5px;
`;

export default UIIconFb;
