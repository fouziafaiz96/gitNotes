import { ChangeEvent } from "react";
import { CustomInput, CustomRow } from "../../../styles/Elements";

interface IProps {
  width?: string;
  bgcolor?: string;
  placeholder: string;
  suffix?: JSX.Element;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  children?: JSX.Element | JSX.Element[] | undefined | 0;
}
export const Input = ({
  width = "100%",
  bgcolor = "transparent",
  placeholder,
  children,
  suffix,
  name,
  onChange,
}: IProps) => {
  return (
    <>
      <CustomInput
        width={width}
        bgcolor={bgcolor}
        placeholder={placeholder}
        suffix={suffix}
        name={name}
        onChange={onChange}
      >
        {children}
      </CustomInput>
    </>
  );
};
