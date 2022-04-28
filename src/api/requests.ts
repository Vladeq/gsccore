import { SignInDto, SignUpDto } from '../types/api-types';
import { instance, tokenInstance } from './instances';

export function getProductsRequest() {
  return instance({
    method: 'GET',
    url: '/api/products',
  });
}
export function SignUpRequest({ email, username, password }: SignUpDto) {
  return instance({
    method: 'POST',
    url: '/api/users/sign-up',
    data: {
      email,
      username,
      password,
    },
  });
}

export function SignInRequest({ email, password }: SignInDto) {
  return instance({
    method: 'POST',
    url: '/api/users/sign-in',
    data: {
      email,
      password,
    },
  });
}
