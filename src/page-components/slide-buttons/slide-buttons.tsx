import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSwiper } from 'swiper/react';

import { ArrowLeft, ArrowRight } from '../../assets/svg-react/index';

interface ButtonsProps {
  slideId: number;
}

function SlideButtons({ slideId }: ButtonsProps) {
  const swiper = useSwiper();
  return (
    <Heading>
      <StyledArrowLeft onClick={() => swiper.slidePrev()} />
      <IndexBlock>
        <Index>{slideId + 1}</Index>
        <SlidesCount>/{swiper.slides.length}</SlidesCount>
      </IndexBlock>
      <StyledArrowRight onClick={() => swiper.slideNext()} />
    </Heading>
  );
}

const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 2rem;
    @media ${theme.devices.tablet} {
      justify-content: center;
    }
  `}
`;
const IndexBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex=wrap: nowrap;
    align-items: center;
    padding: 0 1rem 0 1rem;
    @media ${theme.devices.tablet} {
    }
  `}
`;
const Index = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    font-weight: bold;
    line-height: 28px;
  `}
`;
const SlidesCount = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral};
    font-size: ${theme.sizes.small}rem;
    font-weight: bold;
    line-height: 28px;
  `}
`;
const StyledArrowLeft = styled(ArrowLeft)`
  ${({ theme }) => css`
    @media ${theme.devices.tablet} {
      display: none;
    }
  `}
`;
const StyledArrowRight = styled(ArrowRight)`
  ${({ theme }) => css`
    @media ${theme.devices.tablet} {
      display: none;
    }
  `}
`;

export default SlideButtons;
