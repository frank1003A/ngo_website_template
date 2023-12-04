import { ReactElement } from "react";
import {
  BiListCheck,
  BiSolidHome,
  BiSolidQuoteLeft,
  BiSolidSpeaker,
} from "react-icons/bi";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  icon?: ReactElement<any, any>;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
    icon: <BiSolidHome />,
  },
  {
    label: "About",
    href: "#about",
    icon: <BiSolidSpeaker />,
  },
  {
    label: "Campaigns",
    href: "#campaigns",
    icon: <BiListCheck />,
  },
  {
    label: "Volunteer",
    href: "#volunteers",
    icon: <BiSolidQuoteLeft />,
  },
  {
    label: "Donate",
    href: "#donate",
    icon: <BiSolidQuoteLeft />,
  },
  {
    label: "Events",
    href: "#events",
    icon: <BiSolidQuoteLeft />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <BiSolidQuoteLeft />,
  },
];
