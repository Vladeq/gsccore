import { SignInDto, SignUpDto } from '../types/api-types';
import { instance, tokenInstance } from './instances';

export function getProductsRequest() {
  return instance({
    method: 'GET',
    url: '/api/products',
  });
}
export function SignUpRequest({ email, name, password }: SignUpDto) {
  console.log({ email, name, password });
  return instance({
    method: 'POST',
    url: '/api/users/sign-up',
    data: {
      email,
      name,
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
