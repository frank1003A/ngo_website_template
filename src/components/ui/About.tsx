import { headingRecipe } from "@/variants";
import Image from "next/image";
import { BiChevronsRight } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import Button from "../Button";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

const About = () => {
  return (
    <Container id="#about">
      <div
        className={flex({
          align: "center",
          justify: "space-between",
          direction: { mdDown: "column", lgTo2xl: "row" },
        })}
      >
        <div
          className={flex({
            w: { sm: "100%", md: "100%", lg: "50%", "2xl": "50%" },
            align: "center",
            justify: "center",
          })}
        >
          <Image
            data-aos="zoom-in"
            data-aos-delay="500"
            src={"/assets/hero_4.png"}
            alt="about-us-image"
            width={400}
            height={400}
          />
        </div>
        <div
          className={css({
            w: { sm: "100%", md: "100%", lg: "50%", "2xl": "50%" },
          })}
        >
          <SectionHeader title="about us" />
          <h1 className={headingRecipe()}>
            <span className={css({ color: "primary" })}>Raising</span> Money For{" "}
            <span className={css({ color: "primary" })}>Children</span>.
          </h1>
          <p
            className={css({
              fontSize: 16,
              color: "text",
              mt: 10,
            })}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ea
            deserunt quo impedit fuga dolor veritatis est.
          </p>
          <p
            className={css({
              fontSize: 16,
              color: "text",
              mt: 10,
            })}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ea
            deserunt quo impedit fuga dolor veritatis est.
          </p>
          <div className={css({ mt: 25 })}>
            <Button text="Donate today" icon={<BiChevronsRight />} arrow />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
