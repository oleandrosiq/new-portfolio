import { HTMLAttributes, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Overlay, Content, ButtonCloseModal } from './styles';

export interface ModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

interface MainModalProps extends HTMLAttributes<HTMLDivElement> {
  titleModal?: string;
};

function MainModalBase({ titleModal, children }: MainModalProps, ref) {
  const [active, setActive] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setActive(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActive(false);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal: handleOpenModal,
      closeModal: handleCloseModal,
    }
  });

  if (!active) return null;

  return (
    <Container>
      <Overlay onClick={handleCloseModal} />
      <Content>
        <ButtonCloseModal type='button' onClick={handleCloseModal}>
          <FiX size={22} color='var(--background-button)' />
        </ButtonCloseModal>
        {!!titleModal && <h1>{titleModal}</h1>}
        {children}
      </Content>
    </Container>
  );
}

export const MainModal = forwardRef<ModalHandles, MainModalProps>(MainModalBase); 