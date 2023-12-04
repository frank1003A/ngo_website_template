"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import { BiChevronsRight } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { center, flex, grid, stack } from "../../../styled-system/patterns";
import Button from "../Button";
import Progress from "../progress";

interface CardProps {
  icon?: React.JSX.Element;
  image?: string;
  heading: string;
  link: string;
  dtg?: string;
  needed?: string;
  rem?: string;
}
const Card = ({ icon, heading, link, dtg, needed, rem, image }: CardProps) => {
  const ref = useRef(null);
  const calcPercent = () => {
    let p = (Number(rem) / Number(needed)) * 100;
    return Number(p.toFixed(0));
  };
  const [isOver, setIsOver] = useState(false);
  return (
    <div
      ref={ref}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      className={stack({
        gap: 0,
        align: "center",
        justify: "space-between",
        bgColor: "white",
        h: "fit-content",
        //maxH: 350,
        minW: 250,
        p: "40px 20px",
        pos: "relative",
        transition: ".3s",
      })}
    >
      {icon ? (
        <div
          className={center({
            bgColor: "secondary",
            p: image ? "0px" : "16px",
            w: 60,
            h: 60,
            fontSize: 120,
            color: "primary",
          })}
        >
          {icon}
        </div>
      ) : (
        <Image
          src={image as string}
          alt="campaign_image"
          height={100}
          width={100}
        />
      )}
      <div
        className={css({
          marginBlock: 20,
          textAlign: "center",
          w: 150,
          fontWeight: 600,
          color: "primary",
        })}
      >
        <h2>{heading}</h2>
      </div>
      <div
        className={css({
          pos: "relative",
          left: 0,
          right: 0,
          h: 100,
          w: 200,
          mb: 20,
          bgColor: "transparent",
          transition: "height .3s",
        })}
      >
        <div
          className={flex({
            pos: "absolute",
            left: -40,
            right: -40,
            top: 0,
            bottom: 0,
            bgColor: "primary",
            align: "center",
            justify: "center",
            direction: "column",
            paddingInline: 45,
          })}
        >
          <div className={grid({ columns: 3, gap: 15 })}>
            <div
              className={stack({
                gap: 5,
                align: "center",
              })}
            >
              <h4
                className={css({
                  fontSize: "8px",
                  color: "#82aaac",
                  textAlign: "center",
                })}
              >
                NEEDED
              </h4>
              <span
                className={css({
                  fontSize: "14px",
                  color: "white",
                  textAlign: "center",
                })}
              >
                N <CountUp enableScrollSpy scrollSpyOnce end={Number(needed)} />
              </span>
            </div>
            <div className={stack({ gap: 5 })}>
              <h4
                className={css({
                  fontSize: "8px",
                  color: "#82aaac",
                  textAlign: "center",
                })}
              >
                REMAINING
              </h4>
              <span
                className={css({
                  fontSize: "14px",
                  color: "white",
                  textAlign: "center",
                })}
              >
                N <CountUp enableScrollSpy scrollSpyOnce end={Number(rem)} />
              </span>
            </div>
            <div className={stack({ gap: 5 })}>
              <h4
                className={css({
                  fontSize: "8px",
                  color: "#82aaac",
                  textAlign: "center",
                })}
              >
                DAYS TO GO
              </h4>
              <span
                className={css({
                  fontSize: "14px",
                  color: "white",
                  textAlign: "center",
                })}
              >
                <CountUp enableScrollSpy scrollSpyOnce end={Number(dtg)} />
              </span>
            </div>
          </div>
          <Progress value={calcPercent()} />
        </div>
      </div>
      <div>
        <Link href={link}>
          <Button text="Donate Now" icon={<BiChevronsRight />} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
