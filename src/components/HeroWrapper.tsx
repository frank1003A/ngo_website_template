"use client";
import React from "react";
import { flex } from "../../styled-system/patterns";

const HeroWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={flex({
        direction: "column",
        pos: "relative",
        bgColor: "secondary !important",
        bgImage: "url('/assets/rp1.jpg') !important",
        bgBlendMode: "overlay",
        bgRepeat: "no-repeat",
        bgSize: "cover",
      })}
    >
      {/**<div
        className={css({
          pos: "absolute",
          left: 0,
          right: "auto",
          bottom: "auto",
          top: 40,
          height: 250,
          w: 250,
        })}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
          return <Lottie key={n} animationData={pinAnime} loop={true} />;
        })}
      </div> */}
      {children}
    </section>
  );
};

export default HeroWrapper;
