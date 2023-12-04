"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiChevronsUp } from "react-icons/bi";
import { flex } from "../../../styled-system/patterns";

const ToTopButton = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      setOffset(offset);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        const offset = window.scrollY;
        setOffset(offset);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  return (
    <motion.button
      animate
      onClick={scrollToTop}
      className={flex({
        display: offset >= 800 ? "flex" : "none",
        align: "center",
        justify: "center",
        bgColor: "primary",
        color: "white",
        textTransform: "capitalize",
        p: "10px",
        pos: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 9999,
        cursor: "pointer",
        transition: "ease-in-out .3s",
        w: "fit-content",
        gap: 5,
        fontSize: 25,
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      })}
    >
      <BiChevronsUp />
    </motion.button>
  );
};

export default ToTopButton;
