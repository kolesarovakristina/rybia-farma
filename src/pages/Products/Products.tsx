import React, { FC } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Empty } from 'antd';

import { productsQuery } from 'firebaseApi/queries';

import LoadingSkeleton from 'components/Loading/LoadingSkeleton';
import ProductItem from 'components/ProductItem';
import BaseLayout from 'components/Layouts/BaseLayout';

import classes from './Products.module.scss';

const Products: FC = () => {
  const [products, loading] = useCollectionData(productsQuery);

  if (loading) {
    return (
      <BaseLayout>
        <div className={classes.wrapper}>
          <LoadingSkeleton />
        </div>
      </BaseLayout>
    );
  }

  if (products?.length === 0) {
    return (
      <div className={classes.wrapper__empty}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Momentálne nemáme pridané žiadne produkty na predaj."
        />
      </div>
    );
  }

  return (
    <BaseLayout>
      <div className={classes.wrapper}>
        {products?.map(({ productId, icon, price, name, fishAmout }) => (
          <ProductItem
            key={productId}
            productId={productId}
            icon={icon}
            price={price}
            name={name}
            fishAmout={fishAmout}
          />
        ))}
      </div>
    </BaseLayout>
  );
};

export default Products;
