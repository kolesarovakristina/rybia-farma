import { FC, ReactNode } from 'react';
import { Result } from 'antd';
import classnames from 'classnames';

import { EStatusEnum } from 'enums/StatusEnum';
import type { TModalProps } from 'types';

import InteractiveModal from 'components/_modal/InteractiveModal';

import classes from 'components/Modal/ContactUsModal/ContactUsModal.module.scss';

type TResultModalProps = TModalProps & {
  readonly title: string;
  readonly status?: EStatusEnum;
  readonly subTitle?: string;
  readonly extra?: ReactNode;
  readonly className?: string;
};

const ResultModal: FC<TResultModalProps> = ({
  handleCancel,
  title,
  status,
  subTitle,
  extra,
  className = null,
}) => {
  return (
    <InteractiveModal
      contentClassName={classnames(classes.modal, {
        [className!]: className !== null,
      })}
      handleCloseClick={handleCancel}
    >
      <Result
        status={status ?? EStatusEnum.INFO}
        title={title}
        subTitle={subTitle}
        extra={extra ? extra : null}
      />
    </InteractiveModal>
  );
};

export default ResultModal;
