import { styled } from '../../styles/styled';

export const Container = styled('textarea', {
  width: '100%',
  minHeight: '10rem',
  maxHeight: '15rem',
  padding: '1rem',

  border: '3px solid var(--shape)',
  borderRadius: '1rem',
  background: 'none',

  fontSize: '1.6rem',
  color: 'var(--white)',

  resize: 'vertical',
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