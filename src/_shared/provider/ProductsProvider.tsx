import { FC, ReactNode, useRef, useReducer, useEffect, useMemo } from 'react';

import { EProductActionsEnum } from '_shared/actions';
import { ProductsContext } from '_shared/context';
import { productsReducer } from '_shared/reducer/productsReducer';

type TProductsProviderProps = {
  children: ReactNode;
  storeKey?: string;
};

const ProductsProvider: FC<TProductsProviderProps> = ({
  children,
  storeKey = 'pdt',
}) => {
  const localData = useRef(localStorage.getItem(storeKey));

  const [products, dispatch] = useReducer(
    productsReducer,
    localData.current ? JSON.parse(localData.current) : {}
  );

  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(products));
  }, [products, storeKey]);

  const value = useMemo(
    () => ({
      products,
      addProduct: (productId: string) =>
        dispatch({
          type: EProductActionsEnum.ADD_PRODUCT,
          productId,
        }),
      removeProduct: (productId: string) =>
        dispatch({
          type: EProductActionsEnum.REMOVE_PRODUCT,
          productId,
        }),
      clearBasket: () => dispatch({ type: EProductActionsEnum.CLEAR_BASKET }),
      addProductQuantity: (productId: string, quantity: number) =>
        dispatch({
          type: EProductActionsEnum.ADD_PRODUCT_QUANTITY,
          productId,
          quantity,
        }),
    }),
    [products]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
