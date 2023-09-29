import { MouseEventHandler } from 'react';

export interface ButtonProps {
  text?: string;
  variant?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}
