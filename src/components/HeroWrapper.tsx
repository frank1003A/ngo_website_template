"use client";
import Image from "next/image";
import React from "react";
import { flex } from "../../styled-system/patterns";

const HeroWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={flex({
        direction: "column",
        pos: "relative",
        bgColor: "secondary !important",
        bgBlendMode: "overlay",
      })}
    >
      <Image
        alt={"hero-image"}
        src={"/assets/rp1.jpg"}
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: "cover",
          opacity: 0.2,
        }}
      />
      {children}
    </section>
  );
};

export default HeroWrapper;
