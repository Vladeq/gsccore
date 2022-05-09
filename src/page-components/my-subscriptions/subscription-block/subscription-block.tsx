import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { useSwiper } from 'swiper/react';

import { UIButton } from '../../../components/ui/ui-button';
import { Status } from '../status/index';

interface blockProps {
  isActive: boolean;
  id: number;
  status: string;
  licence: string;
  validDate: number;
  price: string;
  setId: Dispatch<SetStateAction<number>>;
  setSlideId: Dispatch<SetStateAction<number>>;
}

function SubscriptionBlock({
  isActive,
  id,
  status,
  licence,
  validDate,
  price,
  setId,
  setSlideId,
}: blockProps): JSX.Element {
  const swiper = useSwiper();
  if (isActive) {
    setId(id);
  }
  setSlideId(swiper.realIndex);
  return (
    <Heading $isActive={isActive}>
      <TitleBlock>
        <TitleText>GScore</TitleText>
        <Status text={status} />
      </TitleBlock>
      <LicenceBlock>
        <LicenceInfo>
          <LicenceText>{licence}</LicenceText>
          <LicenceValid>valid until {validDate}</LicenceValid>
        </LicenceInfo>
        <LicencePrice>${price}</LicencePrice>
      </LicenceBlock>
      <StyledButton buttonType="secondary" value="View" isLoading={false} />
    </Heading>
  );
}

const Heading = styled.div<{ $isActive: boolean }>`
  ${({ theme, $isActive }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.backgroundBlock};
    border-radius: 12px;
    width: 500px;
    margin: 2rem;
    opacity: ${$isActive ? `none` : `0.6`};
    @media ${theme.devices.tabletXS} {
      width: 400px;
    }
    @media ${theme.devices.mobileS} {
      width: 200px;
      margin: 0;
    }
  `}
`;
const TitleBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.filled};
    padding: 1rem 2rem 0.5rem 2rem;
  `}
`;
const TitleText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    font-weight: 700;
    line-height: 28px;
  `}
`;
const LicenceBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem 0.5rem 2rem;
`;
const LicenceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const LicenceText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    font-weight: 500;
    line-height: 26px;
    margin: 0;
  `}
`;
const LicenceValid = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.filled};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 500;
    line-height: 18px;
    margin-top: 0.5rem;
  `}
`;
const LicencePrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    text-align: center;
    font-weight: 500;
    line-height: 26px;
    padding 0 1rem 0 1rem;
    margin: 0;
  `}
`;

const StyledButton = styled(UIButton)`
  ${({ theme }) => css`
    margin: 1rem 0 2rem 2rem;
    padding: 1rem;
    width: 20%;
  `}
`;
export default SubscriptionBlock;
