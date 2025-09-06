export interface IProductsSchema {
  id?: string;
  title: string;
  description?: string;
  name: string;
  job: string;
  price: number;
  avatar?: string;
  thumbnile?: string;
  createdAt?: Date;
  updatedAt?: Date;
}