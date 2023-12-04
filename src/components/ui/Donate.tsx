"use client";
import { BiChevronsRight } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { css } from "../../../styled-system/css";
import { flex, stack } from "../../../styled-system/patterns";
import Button from "../Button";
import Container from "../Container";
import CustomInput from "../CustomInput";
import SectionHeader from "../SectionHeader";

const Donate = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Container bgColor={"secondary"} id="#donate">
      <div
        ref={ref}
        className={flex({
          align: "center",
          justify: "space-between",
          direction: { mdDown: "column", lgTo2xl: "row" },
        })}
      >
        <div
          className={css({
            w: { sm: "100%", md: "50%", lg: "50%", "2xl": "50%" },
          })}
        >
          <SectionHeader title="dontate now" />
          <h1
            className={css({
              fontSize: { mdDown: "30px", lgTo2xl: "60px" },
              fontWeight: 600,
              lineHeight: "1.2",
            })}
          >
            <span className={css({ color: "primary" })}>Donate</span> Some{" "}
            <br />
            <span className={css({ color: "primary" })}>Money</span> & Save{" "}
            <br />
            <span>The</span>{" "}
            <span className={css({ color: "primary" })}>Children</span>.
          </h1>
          <p className={css({ mt: 30, color: "text" })}>
            Teach self denial and make it&apos;s practice pleasure and you can
            create for the world a destiny
          </p>
        </div>
        <div
          className={stack({
            w: {
              sm: "100%",
              md: "50%",
              lg: "fit-content",
              "2xl": "fit-content",
            },
          })}
        >
          <h1
            className={css({
              fontSize: { mdDown: "30px", lgTo2xl: "40px" },
              fontWeight: 600,
              lineHeight: "1.2",
              color: "primary",
            })}
          >
            Payment Information
          </h1>
          <div className={css({ mt: 30 })}>
            <form action="submit" className={stack({ gap: 30 })}>
              <div className={stack({ direction: "row" })}>
                <CustomInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                />
                <CustomInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div className={stack({ direction: "row" })}>
                <CustomInput
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                />
                <CustomInput
                  type="text"
                  name="address"
                  id="address"
                  placeholder="address"
                />
              </div>
              <div className={stack({ direction: "row" })}>
                <CustomInput
                  type="text"
                  name="card-number"
                  id="card-number"
                  placeholder="card number"
                />
                <CustomInput
                  type="date"
                  name="expiry-date"
                  id="expiry-date"
                  placeholder="expiry date"
                />
              </div>
              <div className={stack({ direction: "row" })}>
                <CustomInput
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder="cvc"
                  maxLength={3}
                />
                <CustomInput
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="amount"
                />
              </div>
              <Button
                bg="variant"
                text="process payment"
                full
                icon={<BiChevronsRight />}
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Donate;
