import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { MainLayout } from '../layouts/main-layout';
import { getSubscribesAct } from '../store/ducks/subscribes/subscribes-actions';

export default function MySubscriptions(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribesAct());
  }, []);
  return (
    <MainLayout>
      <p>AAAAAAAAAAAAAAAA</p>
    </MainLayout>
  );
}
