import { FC } from 'react';
import { Button, InputNumber } from 'antd';

import type { TProductItemProps, TProductsContextProps } from 'types';

import classes from './ShoppingCardDrawerItem.module.scss';

type TShoppingCardDrawerItemProps = TProductItemProps &
  Omit<TProductsContextProps, 'addProduct' | 'clearBasket' | 'products'>;

const ShoppingCardDrawerItem: FC<TShoppingCardDrawerItemProps> = ({
  name,
  price,
  productId,
  fishAmout,
  removeProduct,
  addProductQuantity,
  quantity,
  //   icon,
}) => {
  const handleChange = (quantityNumber: number | null) => {
    if (quantityNumber === null) {
      addProductQuantity(productId, 1);
      return;
    }

    addProductQuantity(productId, quantityNumber);
    return;
  };

  return (
    <div key={productId} className={classes.wrapper}>
      <div>
        <div>{name}</div>
        <div>Cena: {price}&#8364;</div>
        <Button onClick={() => removeProduct(productId!)}>
          Odobrať produkt
        </Button>
      </div>
      <div>
        <div>Počet kg</div>
        <InputNumber
          name={name}
          min={1}
          max={fishAmout}
          addonAfter="kg"
          defaultValue={quantity}
          onChange={quantityNumber => handleChange(quantityNumber)}
        />
      </div>
    </div>
  );
};

export default ShoppingCardDrawerItem;
