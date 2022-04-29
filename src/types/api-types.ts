export interface SignUpDto {
  email?: string;
  username?: string;
  password?: string;
}
export interface SignInDto {
  email?: string;
  password?: string;
}
export interface UpdatePersonalDataDto {
  email: string;
  username: string;
}
export interface UpdatePasswordDto {
  currentPassword: string;
  newPassword: string;
}
export interface User {
  token: string;
  id: number;
  email: string;
  username: string;
}
export interface Price {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
}
export interface Product {
  id: number;
  sitesCount: number;
  name: string;
  prices: [Price];
}
