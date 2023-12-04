"use client";
import { flexRecipe } from "@/variants";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronsRight, BiSolidChevronsRight } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { box, flex, stack } from "../../../styled-system/patterns";
import Button from "../Button";
import { NAV_ITEMS } from "./data";
import { scrollToSection } from "./utils";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      setOffset(offset);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        const offset = window.scrollY;
        setOffset(offset);
      });
    };
  }, []);
  return (
    <div
      className={flex({
        px: 40,
        smDown: {
          py: 14,
          px: 20,
          maxHeight: 70,
        },
        mdDown: {
          py: 14,
          px: 20,
          maxHeight: 0,
        },
        lgTo2xl: {
          py: 0,
          maxHeight: "none",
        },
        align: "center",
        transition: ".2s",
        justifyContent: "space-between",
        pos: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bgColor: offset ? "white" : "transparent",
        borderBottom: offset ? "1px solid #eee" : "none",
        zIndex: 999,
      })}
    >
      <Link
        href={"/"}
        className={css({
          color: "primary",
          fontSize: 20,
          fontWeight: 600,
          textTransform: "capitalize",
          lineHeight: 1.2,
        })}
      >
        <span>first impact foundation</span>
      </Link>
      <div
        className={css({
          display: {
            sm: "none",
            smDown: "none",
            md: "none",
            lg: "block",
            "2xl": "block",
          },
        })}
      >
        <DesktopNav />
      </div>
      <button
        className={css({
          bgColor: "#bde5e7",
          color: "primary",
          textTransform: "capitalize",
          p: "16px 20px",
          display: {
            smDown: "none",
            mdDown: "none",
            lg: "block",
            "2xl": "block",
          },
          cursor: "pointer",
        })}
      >
        donate now
      </button>
      <MobileNav />
    </div>
  );
};

export default Navbar;

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <nav className={flexRecipe({})}>
      {NAV_ITEMS.map((n) => {
        return (
          <Link
            //href={n.href as string}
            key={n.label}
            href={n.href as string}
            onClick={() => scrollToSection(n.href as string)}
            className={css({
              paddingBlock: 30,
              paddingInline: 10,
              fontWeight: "500",
              transition: ".2s",
              cursor: "pointer",
              _hover: {
                color: "white",
                bgColor: "primary",
              },
              color: pathname === n.href ? "white" : "",
              bgColor: pathname === n.href?.toString() ? "primary" : "",
            })}
          >
            <span>{n.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={flex({
        align: "center",
        justify: "center",
        pos: "relative",
        display: {
          sm: "flex",
          mdDown: "flex",
          mdToLg: "none",
          lgTo2xl: "none",
          "2xl": "none",
        },
      })}
    >
      <Hamburger
        hideOutline={false}
        size={30}
        toggled={isOpen}
        toggle={setOpen}
      />
      <div
        role="dialog"
        onClick={() => setOpen(false)}
        className={css({
          pos: "fixed",
          top: "70px",
          insetInline: 0,
          bottom: 0,
          bgColor: "rgba(0, 0, 0, 0.3)",
          transition: ".5s",
          transform: isOpen ? "translateX(0%)" : "translateX(100%)",
        })}
      ></div>
      <div
        className={css({
          pos: "fixed",
          top: 70,
          left: 0,
          w: "300px",
          h: "100%",
          bottom: 0,
          bgColor: "white",
          overflowY: "auto",
          transition: ".5s",
          transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
        })}
      >
        <div role="presentation" className={box({ p: 16, w: "100%" })}>
          <Button text="Donate" icon={<BiChevronsRight />} full />
        </div>
        <ul role="menu" className={flex({ direction: "column" })}>
          {[...NAV_ITEMS].map((n) => {
            return (
              <Link
                role="menuitem"
                href={n.href as string}
                key={n.label}
                className={css({
                  paddingBlock: 20,
                  paddingInline: 40,
                  fontWeight: "500",
                  transition: ".2s",
                  borderBottom: "1px solid #eee",
                  _hover: {
                    color: "white",
                    bgColor: "primary",
                  },
                })}
              >
                <span>{n.label}</span>
              </Link>
            );
          })}
        </ul>
        <div
          className={stack({
            p: "20px",
            w: "100%",
            transition: ".3s",
            bgColor: "secondary",
            align: "center",
            justify: "space-between",
          })}
        >
          <h1
            className={css({
              fontSize: "20px",
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
  );
};
