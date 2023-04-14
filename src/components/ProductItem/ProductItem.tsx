import { FC } from 'react';
import classnames from 'classnames';
import { Image } from 'antd';

import ProductItemDescription from './ProductItemDescription';

import type { TProductItemProps } from 'types';

import classes from './ProductItem.module.scss';

const ProductItem: FC<TProductItemProps> = ({
  productId,
  icon,
  price,
  name,
  fishAmout,
}) => {
  const isProductSoldOut = fishAmout === 0;

  return (
    <div
      className={classnames(classes.holder, classes.holder__content, {
        [classes['holder__sold-out']]: isProductSoldOut,
      })}
    >
      <Image
        alt={name}
        preview={fishAmout > 0}
        className={classnames(classes.holder__icon, {
          [classes['holder__icon__sold-out']]: isProductSoldOut,
        })}
        src={icon}
      />
      <div className={classes.holder__description}>
        <ProductItemDescription
          productId={productId}
          price={price}
          name={name}
          fishAmout={fishAmout}
        />
      </div>
    </div>
  );
};

export default ProductItem;
