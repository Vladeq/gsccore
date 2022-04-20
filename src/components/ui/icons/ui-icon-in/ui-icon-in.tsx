import styled from 'styled-components';

import LinkedIn from './linkedin.svg';

function UIIconIn(): JSX.Element {
  return (
    <Heading>
      <LinkedIn />
    </Heading>
  );
}
const Heading = styled.div`
  padding: 5px;
`;

export default UIIconIn;
