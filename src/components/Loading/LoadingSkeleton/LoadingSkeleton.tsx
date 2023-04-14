import { FC } from 'react';
import { Skeleton } from 'antd';

import { useMediaQuery } from 'hooks/useMediaQuery';

import classes from './LoadingSkeleton.module.scss';

const LoadingSkeleton: FC = () => {
  const isDesktopResolution = useMediaQuery('(min-width: 736px)');

  return (
    <>
      {isDesktopResolution ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Skeleton.Image active className={classes.wrapper__image} />
            <Skeleton active paragraph={{ rows: 3 }} />
            <Skeleton.Button active />
          </div>
        ))
      ) : (
        <div className={classes.wrapper}>
          <Skeleton.Image active className={classes.wrapper__image} />
          <Skeleton active paragraph={{ rows: 3 }} />
          <Skeleton.Button active />
        </div>
      )}
    </>
  );
};

export default LoadingSkeleton;
