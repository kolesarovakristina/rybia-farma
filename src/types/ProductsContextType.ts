export type TProductQuantity = {
  readonly quantity?: number;
  readonly isProductAdded?: boolean;
};

export type TProductsContextProps = {
  readonly products: {
    [key: string]: { quantity: number; isProductAdded: boolean };
  };
  readonly addProduct: (
    productId: string,
    quantity?: number,
    isProductAdded?: boolean
  ) => void;
  readonly removeProduct: (productId: string) => void;
  readonly clearBasket: () => void;
  readonly addProductQuantity: (productId: string, quantity: number) => void;
};
