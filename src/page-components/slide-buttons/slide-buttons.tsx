import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSwiper } from 'swiper/react';

import { ArrowLeft, ArrowRight } from '../../assets/svg-react/index';

function SlideButtons() {
  const swiper = useSwiper();
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [index, setIndex] = useState(1);
  const onPrev = () => {
    if (index <= 1) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
      setIndex((prevIndex) => --prevIndex);
      swiper.slidePrev();
    }
  };
  const onNext = () => {
    if (index >= swiper.slides.length) {
      setDisableNext(true);
    } else {
      setIndex((prevIndex) => ++prevIndex);
      swiper.slideNext();
    }
  };
  return (
    <Heading>
      <ArrowLeft onClick={() => onPrev()} />
      <Index>
        {index}/{swiper.slides.length}
      </Index>
      <ArrowRight onClick={() => onNext()} />
    </Heading>
  );
}

const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `}
`;
const Index = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    font-weight: 700;
    line-height: 28px;
    padding: 0 5px 0 5px;
  `}
`;

export default SlideButtons;
