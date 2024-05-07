import Image from "next/image";
import { BiCalendar, BiChevronsRight } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { box, flex, stack } from "../../../styled-system/patterns";
import Button from "../Button";

const Card = () => {
  return (
    <div
      id="event-card"
      className={flex({
        w: "100%",
        p: 20,
        align: "center",
        justify: "space-between",
        borderTop: "1px solid #eeee",
        direction: { mdDown: "column", lgTo2xl: "row" },
      })}
    >
      <div
        className={stack({
          align: "center",
          "& h2": {
            fontWeight: 600,
          },
          "& span": {
            color: "primary",
          },
          mdDown: {
            flexDir: "row-reverse",
            mb: 10,
          },
        })}
      >
        <h2>12th Aug 2020</h2>
        <span>
          <BiCalendar />
        </span>
      </div>
      <div
        className={box({
          w: 150,
          h: 100,
          pos: "relative",
        })}
      >
        <Image
          alt="event banner"
          src={"/assets/rp1.jpg"}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={stack({
          "& h2": {
            fontWeight: "600",
          },
          "& #address": {
            fontSize: 14,
            color: "text",
          },
        })}
      >
        <div
          className={flex({
            align: "center",
            gap: 10,
            "& span:first-of-type": {
              fontSize: "12px",
              color: "primary",
              "& a:hover": {
                textDecoration: "underline",
              },
            },
            "& span:last-of-type": {
              fontSize: "12px",
              color: "text",
            },
          })}
        >
          <span>
            <a href="#">samira varney</a>
          </span>{" "}
          | <span>10:00 AM - 11:30 AM</span>
        </div>
        <h2>Donate food for poor people </h2>
        <span id="address">6th avenue, cavera 421 road, hse 3242</span>
      </div>
      <div className={css({ mdDown: { mt: 10 } })}>
        <Button text="Book Seat" icon={<BiChevronsRight />} full />
      </div>
    </div>
  );
};

export default Card;
