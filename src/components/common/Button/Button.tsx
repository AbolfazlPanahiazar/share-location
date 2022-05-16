import { FC, ButtonHTMLAttributes } from "react";

import { ButtonWrapper } from "./button.styles";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};
