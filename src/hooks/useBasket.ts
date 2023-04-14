import { useContext } from 'react';

import { ProductsContext } from '_shared/context';

export const useBasket = () => {
  return useContext(ProductsContext);
};
