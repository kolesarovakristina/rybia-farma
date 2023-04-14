import React, { FC, useEffect, KeyboardEvent, ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import classnames from 'classnames';

import PortalModal from '../PortalModal';

import classes from './InteractiveModal.module.scss';

enum EKEY_CODE {
  ESCAPE = 'Escape',
}

type THandleKeyDown = () => void;

type TInteractiveModalProps = {
  readonly children: ReactNode;
  readonly handleCloseClick: () => void;
  readonly isCloseButtonVisible?: boolean;
  readonly contentClassName?: string;
};

const handleCloseOnEscape = (
  event: KeyboardEvent<HTMLInputElement>,
  closeFn: () => void
) => {
  if (event.key === EKEY_CODE.ESCAPE) {
    closeFn();
  }
};

const InteractiveModal: FC<TInteractiveModalProps> = ({
  children,
  contentClassName,
  handleCloseClick,
  isCloseButtonVisible = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>
      handleCloseOnEscape(event, handleCloseClick);

    document.addEventListener(
      'keydown',
      handleKeyDown as THandleKeyDown,
      false
    );

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown as THandleKeyDown,
        false
      );
    };
  }, [handleCloseClick]);

  return (
    <PortalModal>
      <div className={classes.holder}>
        <div
          className={classnames(classes.content, {
            [contentClassName!]: contentClassName !== null,
          })}
        >
          {children}

          {isCloseButtonVisible && (
            <div className={classes.close} onClick={handleCloseClick}>
              <AiOutlineClose size={20} />
            </div>
          )}
        </div>
      </div>
    </PortalModal>
  );
};

export default InteractiveModal;
