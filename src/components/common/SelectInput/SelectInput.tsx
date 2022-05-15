import { FC, InputHTMLAttributes } from "react";

import { Select, InputContainer, InputLabel } from "./selectInput.styles";

export const SelectInput: FC<InputHTMLAttributes<HTMLSelectElement>> = ({
  placeholder,
  ...restProps
}) => {
  return (
    <InputContainer>
      <InputLabel>{placeholder}</InputLabel>
      <Select {...restProps} />
    </InputContainer>
  );
};
