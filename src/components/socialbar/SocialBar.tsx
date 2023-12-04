import {
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { stack } from "../../../styled-system/patterns";

const SocialBar = () => {
  return (
    <div
      className={stack({
        pos: "fixed",
        lgTo2xl: {
          left: 0,
        },
        mdDown: {
          right: 0,
        },
        top: 200,
        gap: 0,
        maxW: 120,
        "& div": {
          p: 16,
          bgColor: "primary",
          color: "white",
          fontSize: 20,
          cursor: "pointer",
          _hover: { bgColor: "#000" },
        },
      })}
    >
      <div>
        <BiLogoFacebook />
      </div>
      <div>
        <BiLogoTwitter />
      </div>
      <div>
        <BiLogoGmail />
      </div>
      <div>
        <BiLogoTelegram />
      </div>
      <div>
        <BiLogoWhatsapp />
      </div>
    </div>
  );
};

export default SocialBar;
