import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import type { TProductItemProps } from 'types';

import { useBasket } from 'hooks/useBasket';

import ShoppingCardDrawerItem from 'components/ShoppingCard/ShoppingCardDrawerItem';

type TShoppingCardDrawerProps = {
  readonly products?: Array<TProductItemProps>;
  readonly totalPrice?: number;
};

const ShoppingCardDrawer: FC<TShoppingCardDrawerProps> = ({
  products,
  totalPrice,
}) => {
  const isShoppingCardEmpty = products?.length === 0;
  const { clearBasket, removeProduct, addProductQuantity } = useBasket();

  return (
    <>
      {isShoppingCardEmpty ? (
        <>
          <div>V košíku nemáte pridané žiadne produkty!</div>
          {/* TODO: fix link */}
          <Link to="/products">Pridať nové produkty?</Link>
        </>
      ) : null}

      {products?.map(
        ({ name, price, productId, fishAmout, icon, quantity }) => (
          <ShoppingCardDrawerItem
            key={productId}
            name={name}
            price={price}
            productId={productId}
            fishAmout={fishAmout}
            icon={icon}
            removeProduct={removeProduct}
            addProductQuantity={addProductQuantity}
            quantity={quantity}
          />
        )
      )}

      {isShoppingCardEmpty ? null : (
        <div>Celková cena: {totalPrice}&#8364;</div>
      )}

      <Button onClick={() => clearBasket()}>Vymazať obsah košíka</Button>
    </>
  );
};

export default ShoppingCardDrawer;
