import ReactDOM from 'react-dom';
import { FC, ReactNode } from 'react';

type TPortalModalProps = {
  readonly children: ReactNode;
};

const PortalModal: FC<TPortalModalProps> = ({ children }) => {
  const modalElement = document.getElementById('modal')!;

  return ReactDOM.createPortal(children, modalElement);
};

export default PortalModal;
