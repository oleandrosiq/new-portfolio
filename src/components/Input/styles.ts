import { styled } from '../../styles/styled';

export const Container = styled('input', {
  width: '100%',
  height: '5rem',
  padding: '0.5rem 1rem',

  border: '3px solid var(--shape)',
  borderRadius: '1rem',
  background: 'none',
  
  fontSize: '1.6rem',
  color: 'var(--white)',

  outline: 'none',

  '&:hover': {
    borderColor: 'var(--blue)',
  },

  '&:focus': {
    borderColor: 'var(--blue)',
  }
});