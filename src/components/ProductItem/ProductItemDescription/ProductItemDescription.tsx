import { FC } from 'react';
import { Button, notification } from 'antd';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { useBasket } from 'hooks/useBasket';

import ProductBadge from 'components/Badge/ProductBadge';

import type { TProductItemProps } from 'types';
import {
  EProductBadgeColorEnum,
  EProductBadgeTitleEnum,
} from 'enums/ProductBadgeEnum';

import classes from './ProductItemDescription.module.scss';

type TProductItemDescriptionProps = Omit<TProductItemProps, 'icon'>;

const ProductItemDescription: FC<TProductItemDescriptionProps> = ({
  productId,
  price,
  fishAmout,
  name,
}) => {
  const { addProduct, products } = useBasket();
  const [api, contextHolder] = notification.useNotification();

  const isProductAdded = products[productId]?.isProductAdded;

  const handleAddProductClick = () => {
    addProduct(productId);

    api.open({
      type: 'success',
      message: 'Produkt bol pridaný do košíka',
      duration: 1,
    });
  };

  const getProductState = () => {
    if (fishAmout === 0) {
      return (
        <ProductBadge
          icon={null}
          label={EProductBadgeTitleEnum.SOLD_OUT}
          color={EProductBadgeColorEnum.RED}
        />
      );
    }

    if (isProductAdded) {
      return (
        <ProductBadge
          label={EProductBadgeTitleEnum.ADDED_TO_BASKET}
          color={EProductBadgeColorEnum.GREEN}
          icon={<IoCheckmarkCircle size={20} />}
        />
      );
    }

    return (
      <Button type="primary" onClick={handleAddProductClick}>
        Do košíka
      </Button>
    );
  };

  const productState = getProductState();

  return (
    <div className={classes.holder}>
      {contextHolder}
      <div className={classes.holder__description}>
        <div className={classes.holder__name}>{name}</div>
        {fishAmout > 0 && (
          <div>
            <span>Na sklade: </span>
            <span className={classes.holder__amount}>{fishAmout} kg</span>
          </div>
        )}
        <div>Cena: {price}&#8364; &#47; kg</div>
      </div>

      {productState}
    </div>
  );
};

export default ProductItemDescription;
