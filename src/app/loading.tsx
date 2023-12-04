import { css } from "../../styled-system/css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <span
      className={css({
        color: "primary",
        fontSize: 20,
        fontWeight: 600,
        textTransform: "capitalize",
      })}
    >
      First Impact Solution
    </span>
  );
}
