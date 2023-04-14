import { FC, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useProducts } from 'hooks/useProducts';
import { useMediaQuery } from 'hooks/useMediaQuery';

import ShoppingCardDrawer from 'components/ShoppingCard/ShoppingCardDrawer';
import InteractiveModal from 'components/_modal/InteractiveModal';

import classes from './ShoppingCardBadge.module.scss';

const ShoppingCardBadge: FC = () => {
  const { basketProducts, basketProductsCount, totalPrice } = useProducts();
  const [isShoppingCardOpen, setIsShoppingCardOpen] = useState(false);

  const isMobileView = useMediaQuery('(max-width: 736px)');

  return (
    <>
      <div
        className={classes.wrapper}
        onClick={() => setIsShoppingCardOpen(true)}
      >
        {basketProductsCount}
        <AiOutlineShoppingCart
          className={classes.wrapper__icon}
          size={isMobileView ? 20 : 25}
        />
      </div>
      {isShoppingCardOpen && (
        <InteractiveModal
          isCloseButtonVisible
          handleCloseClick={() => setIsShoppingCardOpen(false)}
        >
          <div>dfer</div>
          <ShoppingCardDrawer
            products={basketProducts}
            totalPrice={totalPrice}
          />
        </InteractiveModal>
      )}
    </>
  );
};

export default ShoppingCardBadge;
