"use client";
import { headingRecipe } from "@/variants";
//import { motion } from "framer-motion";
import { BiSolidChevronsRight } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { grid, stack } from "../../../styled-system/patterns";
import Button from "../Button";
import SectionHeader from "../SectionHeader";
import Card from "../volunteer/Card";

export const Volunteer = () => {
  return (
    <div
      id="#volunteers"
      className={css({
        py: { mdDown: 40, mdToLg: 40, lgTo2xl: 120, "2xl": 120 },
        px: { mdDown: 20, mdToLg: 40, lgTo2xl: 160, "2xl": 160 },
        pos: "relative",
        _before: {
          content: `""`,
          left: 0,
          bottom: 0,
          pos: "absolute",
          bgImage: "url('/assets/abstract_1.png')",
          bgRepeat: "no-repeat",
          bgSize: "cover",
          height: { mdDown: "150px", lgTo2xl: "200px" },
          width: "250px",
        },
      })}
    >
      <div className={stack({ align: "center" })}>
        <SectionHeader title="volunteer" />
        <h1 className={headingRecipe({ visual: "gap" })}>
          Expert Volunteer at FIS
        </h1>
        <div
          className={grid({
            gap: 30,
            mt: 30,
            columns: { sm: 1, md: 2, lg: 4, "2xl": 4 },
          })}
        >
          <Card
            img="/assets/volunteer/p4.jpg"
            name="Sandra Efeh"
            role="Fund Raiser"
            data-aos="fade-up"
          />
          <Card
            img="/assets/volunteer/p5.jpg"
            name="Chisom Effiong"
            role="Fund Raiser"
            data-aos="fade-up"
          />
          <Card
            img="/assets/volunteer/p3.jpg"
            name="James Pedro"
            role="Fund Raiser"
            data-aos="fade-up"
          />
          <div
            /** initial={{ opacity: 0, y: "50%", filter: "alpha(opacity=0)" }}
            whileInView={{ opacity: 1, y: 0, filter: "alpha(opacity=100)" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }} */
            data-aos="fade-up"
            className={stack({
              p: "20px",
              maxW: 250,
              bgColor: "secondary",
              align: "center",
              justify: "space-between",
            })}
          >
            <h1
              className={css({
                fontSize: "30px",
                fontWeight: 600,
                lineHeight: "1.2",
                textAlign: "center",
              })}
            >
              If You Want To{" "}
              <span className={css({ color: "primary" })}>
                Join Our Volunteer
              </span>{" "}
              Team.
            </h1>
            <div>
              <Button
                bg="variant"
                text="Join Today"
                icon={<BiSolidChevronsRight />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
