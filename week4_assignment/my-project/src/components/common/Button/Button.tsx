/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonStyle } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <button {...props} css={buttonStyle} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
