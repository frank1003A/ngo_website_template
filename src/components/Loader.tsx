import { css } from "../../styled-system/css";
import { center } from "../../styled-system/patterns";

const Loader = () => {
  return (
    <div
      className={center({
        pos: "fixed",
        inset: 0,
        zIndex: 999,
      })}
    >
      <span
        className={css({
          color: "primary",
          h: 48,
          w: 48,
          display: "inline-block",
          pos: "relative",
          boxSizing: "border-box",
          border: "1px solid",
          animation: "fill 2s linear infinite alternate",
        })}
      ></span>
    </div>
  );
};

export default Loader;

/**<span
      className={css({
        color: "primary",
        fontSize: 40,
        fontWeight: 600,
        textTransform: "capitalize",
        pos: "relative",
        _after: {
          content: `"First Impact Solution"`,
          pos: "absolute",
          left: 0,
          top: 0,
          color: "secondary",
          h: "100%",
          w: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
          animation: "animloader 6s linear infinite",
        },
      })}
    >
      First Impact Solution
    </span> */
