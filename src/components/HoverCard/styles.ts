import { styled, css, keyframes } from '../../styles/styled';
import * as HoverCard from '@radix-ui/react-hover-card';

const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(30px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const HoverCardRoot = styled(HoverCard.Root, {});

export const HoverCardTrigger = styled(HoverCard.Trigger, {
  maxWidth: 'max-content',
  cursor: 'pointer',
});

export const HoverCardContent = styled(HoverCard.Content, {
  padding: '0.8rem 1.2rem',

  fontSize: '1.8rem',
  color: 'var(--white)',

  borderRadius: '0.4rem',
  border: '1px solid var(--blue)',
  background: 'var(--shape-hover)',

  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
  animationDuration: '0.6s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
});

export const HoverCardArrow = styled(HoverCard.Arrow, {});