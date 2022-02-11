import { ReactElement } from 'react';

import { HoverCardRoot, HoverCardTrigger, HoverCardContent, HoverCardArrow } from './styles';

interface HoverCardProps {
  children?: ReactElement;
  trigger?: ReactElement | string;
};

export function HoverCard({ trigger, children }: HoverCardProps) {
  return (
    <HoverCardRoot openDelay={0.9} closeDelay={0.5}>
      <HoverCardTrigger>
        {trigger}
      </HoverCardTrigger>
      <HoverCardContent side='bottom'>
        <HoverCardArrow fill='var(--blue)' />
        {children}
      </HoverCardContent>
    </HoverCardRoot>
  );
}