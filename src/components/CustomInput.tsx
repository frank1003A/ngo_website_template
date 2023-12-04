"use client";
import { css } from "../../styled-system/css";

interface CustomInputProps extends React.ComponentPropsWithoutRef<"input"> {}

const CustomInput = ({ ...rest }: CustomInputProps) => {
  return (
    <input
      {...rest}
      className={css({
        h: "40px",
        w: "100%",
        color: "text",
        borderTopRadius: "4px",
        paddingInline: "10px",
        borderBottom: "2px solid transparent",
        transition: "colors .3s",
        "&:focus, &:focus-within, &:focus-visible": {
          outline: "none",
          borderBottomColor: "primary",
        },
        "&::placeholder": {
          textTransform: "capitalize",
        },
      })}
    />
  );
};

export default CustomInput;
