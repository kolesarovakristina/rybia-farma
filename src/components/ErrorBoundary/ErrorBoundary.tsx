import React, { FC } from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Button, Result } from 'antd';

import { useModal } from 'hooks/useModal';

import classes from './ErrorBoundary.module.scss';

enum EErrorBoundaryMessages {
  NOT_EXIST = 'Prepáčte, stránka ktorú sa pokúšate navštíviť, zrejme neexistuje.',
  CONTACT_US = 'V prípade pretrvávajúcich problémov, nás prosím, nižšie kontaktujte.',
}

const ErrorBoundary: FC = () => {
  const error: any = useRouteError();
  const [Modal, showModal] = useModal();

  console.error(error);

  if (
    error.status === 404 &&
    error.data.startsWith('Error: No route matches URL')
  ) {
    return (
      <div className={classes.holder}>
        <div>
          <Result
            status="404"
            title={EErrorBoundaryMessages.NOT_EXIST}
            subTitle={EErrorBoundaryMessages.CONTACT_US}
            extra={
              <div className={classes.wrapper}>
                <Link to="/" replace>
                  Domov
                </Link>
                <Button type="primary" onClick={showModal}>
                  Kontaktujte nás
                </Button>
              </div>
            }
          />
          <Modal />
        </div>
      </div>
    );
  }

  return <div>{error.message}</div>;
};

export default ErrorBoundary;
