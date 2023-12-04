"use client";
import { inter } from "@/app/fonts";
import { BiChevronsRight } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import Button from "../Button";
import Container from "../Container";

const Hero = () => {
  return (
    <Container
      pos={"relative"}
      flexGrow={1}
      mt={{ base: 60, sm: 60, md: 60, lg: 60, "2xl": 85 }}
    >
      <div
        className={flex({
          direction: {
            base: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
            "2xl": "row",
          },
          align: "center",
          justify: "flex-start",
        })}
      >
        <div
          className={flex({
            w: {
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              "2xl": "100%",
            },
            h: "100%",
            direction: "column",
            align: {
              sm: "flex-start",
              smDown: "flex-start",
              md: "flex-start",
              lg: "center",
              "2xl": "center",
            },
            justify: {
              sm: "flex-start",
              smDown: "flex-start",
              md: "flex-start",
              lg: "center",
              "2xl": "center",
            },
          })}
        >
          <h1
            data-aos="zoom-in"
            className={css({
              fontSize: {
                base: "40px",
                sm: "40px",
                md: "40px",
                lg: "60px",
                "2xl": "60px",
              },
              fontWeight: 600,
              lineHeight: "1.2",
              pos: "relative",
              _before: {
                content: `""`,
                pos: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                bgImage: "url('/assets/brush.png')",
                bgRepeat: "no-repeat",
                bgSize: "cover",
                w: "100%",
                h: "100px",
                zIndex: -1,
              },
            })}
          >
            <span className={css({ color: "primary" })}>Charity</span> is Not{" "}
            <br />
            About <span className={css({ color: "primary" })}>Pity</span>. It is{" "}
            <br />
            About <span className={css({ color: "primary" })}>Love.</span>
          </h1>
          <p
            className={css({
              fontFamily: inter.style.fontFamily,
              fontSize: 16,
              color: "text",
              mt: 10,
            })}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ea
            deserunt quo impedit fuga dolor veritatis est.
          </p>
          <div className={css({ mt: 25 })}>
            <Button
              text="donate now"
              bg="variant"
              arrow
              icon={<BiChevronsRight />}
            />
          </div>
        </div>
        {/**<div
          className={flex({
            align: "center",
            justify: "center",
            w: { mdDown: "100%", lgTo2xl: "50%" },
            pos: "relative",
            _before: {
              content: `""`,
              pos: "absolute",
              bgImage: "url('/assets/bggradient.png')",
              bgRepeat: "no-repeat",
              bgPosition: "center",
              bgSize: "cover",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              zIndex: -1,
            },
          })}
        >
          <Image
            src={"/assets/hero_3.png"}
            alt="hero_image"
            height={650}
            width={650}
          />
        </div> */}
      </div>
    </Container>
  );
};

export default Hero;
