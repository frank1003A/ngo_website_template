import { BiDonateBlood, BiHeart, BiSolidGraduation } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { box, flex } from "../../../styled-system/patterns";

const Task = () => {
  return (
    <div
      className={css({
        py: 20,
        px: { sm: 20, md: 20, lg: 160, "2xl": 160 },
        bgColor: "primary",
        pos: "relative",
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
      <div
        className={flex({
          direction: {
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            "2xl": "row",
          },
          align: "flex-start",
          justify: {
            base: "center",
            sm: "center",
            md: "center",
            lg: "space-around",
            "2xl": "space-around",
          },
          gap: { mdDown: 20, md: 10 },
          p: { mdDown: 20, lgTo2xl: 40 },
        })}
      >
        <div
          data-aos="fade-up"
          className={flex({
            align: "center",
            justify: "center",
            fontSize: "20px",
            fontWeight: 600,
            color: "white",
            gap: 10,
          })}
        >
          <div
            className={box({
              border: "1px solid #eee",
              p: "16px",
              fontSize: 20,
            })}
          >
            <BiHeart />
          </div>
          <span>Make Donation</span>
        </div>
        <div
          data-aos="fade-up"
          className={flex({
            align: "center",
            justify: "center",
            fontSize: "20px",
            fontWeight: 600,
            color: "white",
            gap: 10,
          })}
        >
          <div
            className={box({
              border: "1px solid #eee",
              p: "16px",
              bg: "secondary",
              color: "primary",
              fontSize: 20,
            })}
          >
            <BiDonateBlood />
          </div>
          <span>Donate Blood</span>
        </div>
        <div
          data-aos="fade-up"
          className={flex({
            align: "center",
            justify: "center",
            fontSize: "20px",
            fontWeight: 600,
            color: "white",
            gap: 10,
          })}
        >
          <div
            className={box({
              border: "1px solid #eee",
              p: "16px",
              fontSize: 20,
            })}
          >
            <BiSolidGraduation />
          </div>
          <span>Give Scholarship</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
