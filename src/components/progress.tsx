"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { css } from "../../styled-system/css";
import { circle } from "../../styled-system/patterns";

interface ProgressProps {
  value: number;
}
const Progress = ({ value }: ProgressProps) => {
  const [width, setWidth] = useState(0);
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    setWidth(value);
  }, [value]);

  return (
    <div
      className={css({
        h: 2,
        mt: 16,
        pos: "relative",
        bgColor: "#82aaac",
        w: "100%",
      })}
    >
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: `${width}%` }}
        viewport={{ once: true }}
        className={css({
          bgColor: "white",
          h: 2,
          pos: "absolute",
          transition: ".5s",
        })}
      >
        <div className={css({ pos: "relative", w: "100%" })}>
          <span
            className={circle({
              fontSize: 8,
              bgColor: "white",
              w: 30,
              h: 10,
              color: "primary",
              pos: "absolute",
              right: 0,
              top: -4,
              bottom: "auto",
              fontWeight: 600,
            })}
          >
            {value}%
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Progress;
