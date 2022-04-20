import styled from 'styled-components';

import Checked from './checked.svg';

function UIIconChecked(): JSX.Element {
  return (
    <Heading>
      <Checked />
    </Heading>
  );
}
const Heading = styled.div``;

export default UIIconChecked;
