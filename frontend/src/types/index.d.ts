export interface Order {
  price: number;
  quantity: number;
  securityId: string;
}

export interface Security {
  description: string;
  id: string;
  name: string;
  price: number;
}
