import React from "react";
import { TextField } from "@material-ui/core";
type Props = {
  name: string;
  label: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const InputField: React.FC<Props> = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      variant="filled"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};
