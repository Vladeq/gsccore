import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { UIButton } from '../../../components/ui/ui-button';
import { hrefs } from '../../../routes/client';
import { RootState } from '../../../store';
import { selectSubscribes } from '../../../store/ducks/subscribes/subscribes-selectors';
import { SlideButtons } from '../../slide-buttons/index';
import { SubscriptionBlock } from '../subscription-block';

function SwiperComponent(): JSX.Element {
  const [activeId, setActiveId] = useState(0);
  const router = useRouter();
  const subscribes = useSelector((state: RootState) =>
    selectSubscribes(state.subscribes),
  );
  return (
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
          1280: { slidesPerView: 2, centeredSlidesBounds: false, spaceBetween: 40 },
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
  );
}
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

export default SwiperComponent;
