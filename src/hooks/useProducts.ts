import { useCollectionData } from 'react-firebase-hooks/firestore';

import { productsQuery } from 'firebaseApi/queries';

import { useBasket } from './useBasket';

import type { TProductItemProps } from 'types';

export const useProducts = () => {
  const [data, loading] = useCollectionData(productsQuery);
  const { products } = useBasket();

  if (loading) {
    return {};
  }

  const getProductsFromBasket = (productId: string) =>
    data?.find(item => item.productId === productId) as TProductItemProps;

  const basketProducts = Object.keys(products).map(productId => {
    const product = getProductsFromBasket(productId);
    const quantity = products[productId].quantity;

    return {
      ...product,
      quantity: quantity,
      totalPrice: product.price * quantity,
    };
  });

  const totalPrice = basketProducts.reduce(
    (sum, product) => sum + product.totalPrice,
    0
  );

  const basketProductsCount =
    basketProducts?.length === 0 ? null : basketProducts?.length;

  return { basketProducts, basketProductsCount, totalPrice };
};
