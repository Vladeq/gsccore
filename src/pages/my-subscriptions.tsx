import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { MainLayout } from '../layouts/main-layout';
import { SubscriptionBlock } from '../page-components/my-subscriptions/subscription-block';
import { getSubscribesAct } from '../store/ducks/subscribes/subscribes-actions';

export default function MySubscriptions(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribesAct());
  }, []);
  return (
    <MainLayout>
      <Subscriptions>
        <SubscriptionBlock />
        <SubscriptionBlock />
        <SubscriptionBlock />
        <SubscriptionBlock />
        <SubscriptionBlock />
        <SubscriptionBlock />
      </Subscriptions>
    </MainLayout>
  );
}

const Subscriptions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-direction: space-between;
    width: calc(500px * 6);
  `}
`;
