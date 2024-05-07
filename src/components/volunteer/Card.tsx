//import { motion } from "framer-motion";
import Image from "next/image";
import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
} from "react-icons/bi";
import { box, stack } from "../../../styled-system/patterns";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  img: string;
  name: string;
  role: string;
  delay?: number;
}
const Card = ({ img, name, role, delay, ...rest }: CardProps) => {
  return (
    <div
      /**initial={{ opacity: 0, y: "50%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }} */
      className={stack({
        minW: 200,
        willChange: "transform, opacity",
      })}
      {...rest}
    >
      <div
        className={box({
          w: "100%",
          h: 150,
          pos: "relative",
          bgRepeat: "no-repeat",
          bgSize: "cover",
          bgPosition: "center",
        })}
      >
        <Image
          alt={`${name} ${img}`}
          src={img}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div
          className={stack({
            w: "30px",
            pos: "absolute",
            right: -10,
            top: 20,
            bgColor: "primary",
            align: "center",
            paddingBlock: 10,
            shadow: "initial",
            color: "white",
            zIndex: 2,
          })}
        >
          <a href="#">
            <BiLogoFacebookSquare />
          </a>
          <a href="#">
            <BiLogoTiktok />
          </a>
          <a href="#">
            <BiLogoInstagram />
          </a>
          <a href="#">
            <BiLogoLinkedinSquare />
          </a>
        </div>
      </div>
      <div
        className={stack({
          bgColor: "secondary",
          align: "center",
          justify: "center",
          p: "20px",
          mt: 20,
          transition: "ease-in-out .3s",
          "& h4": {
            fontWeight: 600,
          },
          "& span": {
            fontSize: "14px",
            color: "primary",
          },
          _hover: {
            bgColor: "primary",
            "& h4, & span": {
              color: "white",
            },
          },
        })}
      >
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  );
};

export default Card;
