import { BiChevronsRight } from "react-icons/bi";
import { css } from "../../../styled-system/css";
import { flex, stack } from "../../../styled-system/patterns";

const Contact = () => {
  return (
    <div
      id="#contact"
      className={css({
        py: 50,
        px: { smDown: "20px", smToMd: "20px", md: "20px", lg: 160, "2xl": 160 },
      })}
    >
      <div
        className={flex({
          direction: { mdDown: "column", lgTo2xl: "row" },
          w: "100%",
          //    h: "300px",
          align: "center",
          p: { smDown: 20, smToMd: 20, md: 20, lg: 40, "2xl": 40 },
          justify: "space-between",
          //bgColor: "primary",
          bgColor: "primary !important",
          bgImage: "url('/assets/rp2.jpg') !important",
          bgBlendMode: "overlay",
          bgRepeat: "no-repeat",
          bgPosition: "center",
          bgSize: "cover",
        })}
      >
        <div
          className={stack({
            gap: 30,
            w: { smDown: "100%", md: "100%", lg: "50%", "2xl": "50%" },
            "& h1": {
              color: "white",
            },
            "& span": {
              color: "#eee",
              marginBottom: 30,
            },
          })}
        >
          <h1
            className={css({
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.2",
            })}
          >
            Contact Us Today For Enquiries!
          </h1>
          <span>Lead the way for the children</span>
        </div>
        <div
          className={stack({
            w: {
              smDown: "100%",
              smToMd: "100%",
              md: "100%",
              lg: "50%",
              "2xl": "50%",
            },
            h: "100%",
            justify: "space-around",
            align: {
              smDown: "flex-start",
              smToMd: "flex-start",
              md: "flex-end",
              lg: "flex-end",
              "2xl": "flex-end",
            },
            "& span": {
              fontSize: { mdDown: "20", lgTo2xl: "30px" },
              fontWeight: 600,
              lineHeight: "1.2",
              color: "white",
            },
          })}
        >
          <span>+234 885 5465 435</span>
          <span>donate@FIB.com</span>
          <button
            className={flex({
              align: "center",
              justify: "center",
              bgColor: "#093a3e",
              color: "white",
              textTransform: "capitalize",
              p: "16px 20px",
              pos: "relative",
              cursor: "pointer",
              transition: "ease-in-out .3s",
              gap: 5,
              mt: 30,
            })}
          >
            DONATE NOW
            <span aria-hidden>
              <BiChevronsRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
