import React, { useState, useCallback } from 'react';

import ContactUsModal from 'components/Modal/ContactUsModal';

export const useModal = (): [() => JSX.Element | null, () => void] => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => setIsModalOpen(true), []);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const Modal = () => {
    if (!isModalOpen) return null;

    return <ContactUsModal handleCancel={closeModal} />;
  };

  return [Modal, showModal];
};
