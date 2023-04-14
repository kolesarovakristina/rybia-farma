import { createContext } from 'react';
import { TProductsContextProps } from 'types';

const initialState = {
  products: {},
  addProduct: () => null,
  removeProduct: () => null,
  clearBasket: () => null,
  addProductQuantity: () => null,
};

export const ProductsContext =
  createContext<TProductsContextProps>(initialState);
