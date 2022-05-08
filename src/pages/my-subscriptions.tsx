import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styled, { css, ThemeContext } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ErrorComponent } from '../components/error-component';
import { UIButton } from '../components/ui/ui-button';
import { MainLayout } from '../layouts/main-layout';
import { Codes } from '../page-components/my-subscriptions/codes';
import { EmptySubscriptions } from '../page-components/my-subscriptions/empty-subscriptions';
import { SubscriptionBlock } from '../page-components/my-subscriptions/subscription-block';
import { SlideButtons } from '../page-components/slide-buttons';
import { hrefs } from '../routes/client';
import { RootState } from '../store';
import { getSubscribesAct } from '../store/ducks/subscribes/subscribes-actions';
import { selectSubscribes } from '../store/ducks/subscribes/subscribes-selectors';

export default function MySubscriptions(): JSX.Element {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const [activeId, setActiveId] = useState(0);
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
        ) : subscribes.length == 0 ? (
          <EmptySubscriptions />
        ) : (
          <>
            <TitleBlock>
              <Text>My Subscriptions</Text>
              <StyledButton
                buttonType="primary"
                isLoading={false}
                value="Upgrade"
                onClick={() => router.push({ pathname: hrefs.home, query: { activeId } })}
              />
            </TitleBlock>
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
          </>
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
const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;
const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.title}rem;
    font-weight: 700;
    line-height: 40px;
    margin: 0;
  `}
`;
const StyledButton = styled(UIButton)`
  padding: 0 0.2rem 0 0.2rem;
  width: 10%;
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
    }
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
