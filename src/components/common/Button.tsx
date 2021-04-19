import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

interface ButtonProps {
  title: string;
  bgColor?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  outline: none;
  background: ${(props) => props.bgColor || props.theme.color.main};
  color: ${(props) => props.color || props.theme.color.light};
  transition: all 0.4s ease;

  &:hover,
  &:focus {
    background: ${(props) => darken(0.2, props.theme.color.main)};
  }
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.title}</StyledButton>;
};

export default Button;
