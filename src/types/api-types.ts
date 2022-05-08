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
export interface Code {
  id: number;
  code: string;
  origin: string;
  status: string;
  subscribeId: number;
  userId: string;
}
export interface Subscribe {
  id: number;
  userId: number;
  productId: number;
  product: Product;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  status: string;
  codes: [Code];
}
export interface BuySubscribeDto {
  priceId: number;
}
export interface ActivateCodeDto {
  code: string;
}
export interface ChangeSubsribeDto {
  productId: number;
  subscribeId: number;
}
export interface ManageCodesDto {
  codesIds: [];
  subscribeId: number;
}