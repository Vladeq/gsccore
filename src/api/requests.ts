import {
  ActivateCodeDto,
  BuySubscribeDto,
  ChangeSubsribeDto,
  ManageCodesDto,
  SignInDto,
  SignUpDto,
  UpdatePasswordDto,
  UpdatePersonalDataDto,
} from '../types/api-types';
import { instance, tokenInstance } from './instances';

export function getProductsRequest() {
  return instance.get('/api/products');
}
export function SignUpRequest({ email, username, password }: SignUpDto) {
  return instance.post('api/users/sign-up', { email, username, password });
}

export function SignInRequest({ email, password }: SignInDto) {
  return instance.post('api/users/sign-in', { email, password });
}

export function UpdatePersonalDataRequest({ email, username }: UpdatePersonalDataDto) {
  return tokenInstance.patch('/api/users', { email, username });
}

export function UpdatePasswordRequest({
  currentPassword,
  newPassword,
}: UpdatePasswordDto) {
  return tokenInstance.patch('/api/users/update-password', {
    currentPassword,
    newPassword,
  });
}

export function getSubscribesRequest() {
  return tokenInstance.get('/api/subscribe/self');
}

export function BuySubscribeRequest({ priceId }: BuySubscribeDto) {
  return tokenInstance.post('/api/payments/buy', { priceId });
}

export function getCodesRequest() {
  return tokenInstance.get('/api/code/self');
}
export function ActivateCodeRequest({ code }: ActivateCodeDto) {
  return tokenInstance.post('/api/code/activate', { code });
}
export function ChangeSubscribeRequest({ productId, subscribeId }: ChangeSubsribeDto) {
  return tokenInstance.post('/api/subscribe/change-product', { productId, subscribeId });
}
export function ManageCodesRequest({ codesIds, subscribeId }: ManageCodesDto) {
  return tokenInstance.put('/api/code/manage', { codesIds, subscribeId });
}
