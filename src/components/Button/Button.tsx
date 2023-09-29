import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  border: ${(props) =>
    props.variant === 'outlined' ? '1px solid #22C0AD' : 'none'};
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-weight: 500;
  border-radius: 6px;
  display: flex;
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  color: ${(props) => (props.variant === 'solid' ? '#fff' : '#22C0AD')};
  background-color: ${(props) =>
    props.variant === 'solid' ? '#22C0AD' : '#fff'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? null
        : props.variant === 'solid'
        ? '#1DA595'
        : '#E7F9F7'};
  }
  &:active {
    background-color: ${(props) =>
      props.disabled
        ? null
        : props.variant === 'solid'
        ? '#178276'
        : '#C6F1ED'};
    transition: none;
  }
`;

const Button: React.FC<ButtonProps> = ({
  size,
  variant = 'solid',
  disabled = false,
  text = 'Button',
  onClick,
  style,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      size={size}
      {...props}
      style={style}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
