"use client";
import { flex } from "../../styled-system/patterns";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  icon: React.JSX.Element;
  bg?: "main" | "variant";
  arrow?: boolean;
  full?: boolean;
}

const Button = ({ text, icon, bg, arrow, full }: ButtonProps) => {
  return (
    <button
      className={flex({
        align: "center",
        justify: "center",
        bgColor: bg === "variant" ? "primary" : "secondary",
        color: bg === "variant" ? "white" : "primary",
        textTransform: "capitalize",
        p: "16px 20px",
        pos: "relative",
        cursor: "pointer",
        transition: "ease-in-out .3s",
        w: full ? "100%" : "fit-content",
        gap: 5,
        _hover: {
          bgColor: bg === "variant" ? "" : "primary",
          color: bg === "variant" ? "" : "white",
        },
        _before: {
          content: arrow ? `""` : "none",
          pos: "absolute",
          bgImage: "url('/assets/arr.png')",
          bgRepeat: "no-repeat",
          bgPosition: "center",
          bgSize: "cover",
          height: "100%",
          width: 100,
          top: 0,
          bottom: 0,
          right: -100,
        },
      })}
    >
      {text}
      <span aria-hidden>{icon}</span>
    </button>
  );
};

export default Button;
