import { MouseEventHandler } from 'react';

export interface ButtonProps {
  cta?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}
