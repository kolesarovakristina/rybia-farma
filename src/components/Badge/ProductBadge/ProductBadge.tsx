import React, { FC } from 'react';
import classnames from 'classnames';

import type { TProductBadgeProps } from 'types/ProductBadgeType';

import classes from './ProductBadge.module.scss';

const ProductBadge: FC<TProductBadgeProps> = ({ label, icon, color }) => (
  <div className={classnames(classes.badge, classes[`badge--${color}`])}>
    <div title={label} className={classes.badge__label}>
      {label}
    </div>

    {icon !== null && (
      <div className={classnames(classes.icon, classes[`icon--${color}`])}>
        {icon}
      </div>
    )}
  </div>
);

export default ProductBadge;
