import styled from 'styled-components';

import Twitter from './twitter.svg';

function UIIconTwitter(): JSX.Element {
  return (
    <Heading>
      <Twitter />
    </Heading>
  );
}

const Heading = styled.div`
  padding: 5px;
`;
export default UIIconTwitter;
