import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styled, { css, ThemeContext } from 'styled-components';

import { ErrorComponent } from '../components/error-component';
import { MainLayout } from '../layouts/main-layout';
import { Codes } from '../page-components/my-subscriptions/codes';
import { EmptySubscriptions } from '../page-components/my-subscriptions/empty-subscriptions';
import { SwiperComponent } from '../page-components/my-subscriptions/swiper';
import { RootState } from '../store';
import { getSubscribesAct } from '../store/ducks/subscribes/subscribes-actions';
import { selectSubscribes } from '../store/ducks/subscribes/subscribes-selectors';

export default function MySubscriptions(): JSX.Element {
  const theme = useContext(ThemeContext);
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
          <SwiperComponent />
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
const loader = css`
  margin: 2rem;
`;
