"use client";
import CountUp from "react-countup";
import { css } from "../../../styled-system/css";
import { flex, stack } from "../../../styled-system/patterns";

const Update = () => {
  return (
    <div
      className={flex({
        direction: { mdDown: "column", lgTo2xl: "row" },
        align: { mdDown: "flex-start", lgTo2xl: "center" },
        justify: "space-between",
        py: 40,
        px: { smDown: 20, smToMd: 20, md: 20, lg: 160, "2xl": 160 },
        bgColor: "primary",
        pos: "relative",
        gap: 30,
        _after: {
          content: `""`,
          pos: "absolute",
          left: 160,
          right: 160,
          bottom: "-8px",
          h: "8px",
          bgColor: "#bde5e7",
        },
      })}
    >
      <div className={css({ w: { mdDown: "100%", lgTo2xl: "50%" } })}>
        <h1
          className={css({
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "1.2",
            color: "white",
          })}
        >
          Total <span className={css({ color: "#82aaac" })}>Money </span>
          Raised <br />
          This Year.
          {/**<span className={css({ color: "#82aaac" })}>
            <BiMoney />
          </span> */}
        </h1>
      </div>
      <div
        className={stack({
          align: { mdDown: "flex-start", lgTo2xl: "flex-end" },
          "& span#number": {
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "1.2",
            color: "white",
          },
          "& span#links": {
            fontSize: "12px",
            "& span": {
              mr: 5,
              lineHeight: "1.2",
              color: "#82aaac",
            },
            "& a": {
              textDecoration: "underline",
              lineHeight: "1.2",
              color: "white",
              cursor: "pointer",
            },
          },
        })}
      >
        <span id="number">
          N <CountUp enableScrollSpy scrollSpyOnce end={8792} />
          .00
        </span>
        <span id="links">
          <span>YOU CAN</span>
          <a>DONATE NOW</a>
        </span>
      </div>
    </div>
  );
};

export default Update;
