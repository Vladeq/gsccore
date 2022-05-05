import 'swiper/css';
import 'swiper/css/pagination';

import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import SvgArrowLeft from '../assets/svg-react/arrow-left';
import SvgArrowRight from '../assets/svg-react/arrow-right';
import { MainLayout } from '../layouts/main-layout';
import { SubscriptionBlock } from '../page-components/my-subscriptions/subscription-block';
import SlideNextButton from '../page-components/slide-button/slide-next';
import { getSubscribesAct } from '../store/ducks/subscribes/subscribes-actions';
import { Subscribe } from '../types/api-types';

export default function MySubscriptions(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribesAct());
  }, []);
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
  //   },
  // };
  return (
    <MainLayout>
      <Subscriptions>
        <SwiperBlock
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={pagination}
          setWrapperSize={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          <SwiperSlide>
            <SubscriptionBlock />
          </SwiperSlide>
          <SwiperSlide>
            <SubscriptionBlock />
          </SwiperSlide>
          <SwiperSlide>
            <SubscriptionBlock />
          </SwiperSlide>
          <SwiperSlide>
            <SubscriptionBlock />
          </SwiperSlide>
        </SwiperBlock>
        <SlideNextButton />
      </Subscriptions>
    </MainLayout>
  );
}

const Subscriptions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `}
`;
const SwiperBlock = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
