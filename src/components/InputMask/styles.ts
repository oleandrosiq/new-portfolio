import InputMask from 'react-input-mask';
import { styled } from '../../styles/styled';

export const Input = styled(InputMask, {
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
  },

  variants: {
    variant: {
      error: {
        borderColor: 'var(--red) !important',
        
        '&::-webkit-input-placeholder': {
          color: 'var(--red) !important',
        }
      }
    }
  }
});