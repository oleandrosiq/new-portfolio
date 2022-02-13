import { forwardRef, useCallback } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { BsArrowUpShort } from 'react-icons/bs';
import Link from 'next/link';

import { Container, Content, Instagram, ButtonBackTop } from './styles';

function FooterBase({}, ref) {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container ref={ref}>
      <Content>
        <span>
          <strong>LS</strong>
          <p>oleandrosiq 2022 • Todos os direitos reservados.</p>
        </span>

        <Instagram>
          <span>
            <FiInstagram size={22} color='var(--white)' />
            <h5>Siga-me no Instagram</h5>
          </span>
          <FiInstagram className='icon-desktop' size={22} color='var(--white)' />
          <Link href='https://www.instagram.com/oleandrosiq/' passHref>
            <a target="_blank">
              oleandrosiq
            </a>
          </Link>
        </Instagram>
      </Content>
      <ButtonBackTop>
        <button type='button' onClick={handleScrollTop}>
          <div>
            <BsArrowUpShort size={24} color='var(--white)' />
          </div>
          <p>VOLTAR AO TOPO</p>
        </button>
      </ButtonBackTop>
    </Container>
  );
}

export const Footer = forwardRef(FooterBase);