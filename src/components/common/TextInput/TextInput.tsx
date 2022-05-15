import { FC, InputHTMLAttributes } from "react";

import { Input, InputContainer, InputLabel } from "./textInput.styles";

export const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  ...restProps
}) => {
  return (
    <InputContainer>
      <InputLabel>{placeholder}</InputLabel>
      <Input {...restProps} />
    </InputContainer>
  );
};
