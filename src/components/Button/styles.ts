import { styled } from '../../styles/styled';

export const Container = styled('button', {
  padding: '0.8rem 2.4rem',

  border: '2px solid var(--border)',
  borderRadius: '0.4rem',
  background: 'var(--background-button)',

  color: 'var(--white)',
  fontSize: '1.5rem',

  transition: 'background 0.2s ease-in-out',

  '&:hover': {
    borderColor: 'var(--border-light)',
    opacity: '0.8',
  },
});