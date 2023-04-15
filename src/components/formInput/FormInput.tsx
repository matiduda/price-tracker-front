import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ReactElement } from "react";

type FormInputProps = {
  element: string;
  setValue: (value: string) => void;
  autofocus: boolean;
  type: string;
};

export const FormInput = (props: FormInputProps): ReactElement => {
  return (
    <FormControl mt={2}>
      <FormLabel>{props.element}</FormLabel>
      <Input
        placeholder={props.element}
        onChange={(e) => props.setValue(e.target.value)}
        autoFocus={props.autofocus}
        type={props.type}
      />
    </FormControl>
  );
};
