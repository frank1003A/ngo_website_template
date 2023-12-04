import { css } from "../../styled-system/css";

interface SectionHeaderProps {
  title: string;
}
const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h1
      className={css({
        color: "text",
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: 600,
        mb: 30,
        "& span": {
          color: "text",
        },
      })}
    >
      <span>||</span> {title} <span>||</span>
    </h1>
  );
};

export default SectionHeader;
