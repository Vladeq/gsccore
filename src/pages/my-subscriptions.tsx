import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styled, { css, ThemeContext } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ErrorComponent } from '../components/error-component';
import { MainLayout } from '../layouts/main-layout';
import { Codes } from '../page-components/my-subscriptions/codes';
import { SubscriptionBlock } from '../page-components/my-subscriptions/subscription-block';
import { SlideButtons } from '../page-components/slide-buttons';
import { RootState } from '../store';
import { getSubscribesAct } from '../store/ducks/subscribes/subscribes-actions';
import { selectSubscribes } from '../store/ducks/subscribes/subscribes-selectors';

export default function MySubscriptions(): JSX.Element {
  const theme = useContext(ThemeContext);
  const [activeId, setActiveId] = useState(0);
  console.log(activeId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribesAct());
  }, []);
  const state = useSelector((state: RootState) => state.subscribes);
  const subscribes = useSelector((state: RootState) =>
    selectSubscribes(state.subscribes),
  );

  return (
    <MainLayout>
      <Subscriptions>
        {state.isLoading ? (
          <ClipLoader loading={true} size={150} color={theme.colors.error} css={loader} />
        ) : state.isError ? (
          <ErrorComponent err={state.error.message} />
        ) : (
          <SwiperBlock
            slidesPerView={1}
            centeredSlides={true}
            centeredSlidesBounds={true}
            setWrapperSize={true}
            breakpoints={{
              1024: { slidesPerView: 2, centeredSlidesBounds: false },
              1280: { slidesPerView: 3, centeredSlidesBounds: false, spaceBetween: 40 },
            }}
          >
            <>
              {subscribes.map((subscribe) => {
                return (
                  <SwiperSlide key={subscribe.id}>
                    {({ isActive }) => (
                      <SubscriptionBlock
                        isActive={isActive}
                        id={subscribe.id}
                        status={subscribe.status}
                        licence={subscribe.product.name}
                        validDate={subscribe.currentPeriodEnd}
                        price={subscribe.product.prices[0].price}
                        setId={setActiveId}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </>
            <SlideButtons />
          </SwiperBlock>
        )}
      </Subscriptions>
      <Codes />
    </MainLayout>
  );
}

const Subscriptions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `}
`;
const SwiperBlock = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 0;
    @media ${theme.devices.laptop} {
      width: 100%;
    }
  `}
`;
const loader = css`
  margin: 2rem;
`;
