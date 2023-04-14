import { EProductActionsEnum, TProductsActions } from '_shared/actions';

type TProductsReducer =
  | { [key: string]: { quantity: number; isProductAdded: boolean } }
  | {};

export const productsReducer = (
  state: TProductsReducer,
  action: TProductsActions
): TProductsReducer => {
  switch (action.type) {
    case EProductActionsEnum.ADD_PRODUCT:
      return {
        ...state,
        // start with product quantity == 1kg
        [action.productId]: { quantity: 1, isProductAdded: true },
      };
    case EProductActionsEnum.REMOVE_PRODUCT:
      const key = action.productId;
      const { [key]: value, ...removedMarkedProduct } = state as {
        [key: string]: string;
      };

      return removedMarkedProduct;
    case EProductActionsEnum.CLEAR_BASKET:
      return {};
    case EProductActionsEnum.ADD_PRODUCT_QUANTITY:
      // @ts-expect-error [it's also possible to set explicitly isProductAdded: true]
      const isProductAdded = state[action.productId].isProductAdded as {
        [key: string]: {
          isProductAdded: boolean;
        };
      };

      return {
        ...state,
        [action.productId]: {
          quantity: action.quantity,
          isProductAdded,
        },
      };

    default:
      return state;
  }
};
