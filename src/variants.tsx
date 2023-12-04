import { cva } from "../styled-system/css";

export const flexRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    visual: {
      left: { alignItems: "flex-start" },
      right: { alignItems: "flex-end" },
      center: { alignItems: "center" },
    },
  },
  defaultVariants: {
    visual: "center",
  },
});

export const headingRecipe = cva({
  base: {
    fontSize: { mdDown: "30px", lgTo2xl: "40px" },
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
  },
  variants: {
    visual: {
      noGap: { mb: 0, color: "inherit" },
      gap: { mb: 30, color: "primary", textAlign: "center" },
    },
  },
  defaultVariants: {
    visual: "noGap",
  },
});
