import {
  BiChevronsRight,
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { flex, grid, stack } from "../../../styled-system/patterns";
import Container from "../Container";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <Container bgColor={"secondary"}>
        <div
          className={grid({
            columns: { mdDown: 1, lgTo2xl: 3 },
            alignItems: "center",
          })}
        >
          <div className={stack({ align: "flex-start" })}>
            <h1 className={css({ color: "text", fontWeight: 600 })}>
              First Impact Foundation
            </h1>
            <ul
              className={stack({
                direction: "row",
                "& li": {
                  fontSize: 20,
                  cursor: "pointer",
                  _hover: { color: "primary" },
                },
              })}
            >
              <li>
                <BiLogoFacebook />
              </li>
              <li>
                <BiLogoTwitter />
              </li>
              <li>
                <BiLogoGmail />
              </li>
              <li>
                <BiLogoTelegram />
              </li>
              <li>
                <BiLogoWhatsapp />
              </li>
            </ul>
            <h2 className={css({ color: "text", fontWeight: 600 })}>
              Total Money Raised:{" "}
            </h2>
            <div
              className={stack({
                align: { mdDown: "flex-start", lgTo2xl: "flex-end" },
                "& span#number": {
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "1.2",
                  color: "primary",
                },
                "& span#links": {
                  display: "inline-flex",
                  fontSize: "12px",
                  "& span": {
                    mr: 5,
                    lineHeight: "1.2",
                    color: "primary",
                  },
                  "& a": {
                    textDecoration: "underline",
                    lineHeight: "1.2",
                    color: "primary",
                    cursor: "pointer",
                  },
                },
              })}
            >
              <span id="number">N8,792.00</span>
              <span id="links">
                <span>YOU CAN</span>
                <a>DONATE NOW</a>
              </span>
            </div>
          </div>
          <div
            className={stack({
              align: "flex-start",
              "& li": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                color: "text",
                _hover: {
                  color: "primary",
                  textDecoration: "underline",
                },
              },
            })}
          >
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Fundraiser</span>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Volunteer</span>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Sponsor</span>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Meet The Team</span>
            </li>
          </div>
          <div
            className={stack({
              align: "flex-start",
              "& li": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                color: "text",
                _hover: {
                  color: "primary",
                  textDecoration: "underline",
                },
              },
            })}
          >
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Abount FIS</span>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Terms & Condition</span>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Other Ways to Give </span>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <span>Fundraise for Charity</span>
            </li>
          </div>
        </div>
      </Container>
      <div
        className={flex({
          align: "center",
          justify: "center",
          p: 20,
          color: "text",
          fontSize: 14,
        })}
      >
        First Impact Foundation &copy; {date.getFullYear()} | All Rights
        Reserved
      </div>
    </>
  );
};

export default Footer;
