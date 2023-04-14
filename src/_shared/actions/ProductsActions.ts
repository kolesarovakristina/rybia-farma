import { TProductItemProps, TProductQuantity } from 'types';

export enum EProductActionsEnum {
  ADD_PRODUCT = 'add_product',
  REMOVE_PRODUCT = 'remove_product',
  CLEAR_BASKET = 'clear_basket',
  ADD_PRODUCT_QUANTITY = 'add_product_quantity',
}

type TProductType = Pick<TProductItemProps, 'productId'> & TProductQuantity;

export type TProductsActions =
  | ({ type: EProductActionsEnum.ADD_PRODUCT } & TProductType)
  | ({ type: EProductActionsEnum.REMOVE_PRODUCT } & TProductType)
  | { type: EProductActionsEnum.CLEAR_BASKET }
  | ({ type: EProductActionsEnum.ADD_PRODUCT_QUANTITY } & TProductType);
