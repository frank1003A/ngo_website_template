"use client";
import { headingRecipe } from "@/variants";
import { grid, stack } from "../../../styled-system/patterns";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Card from "../campaign/Card";

const Campaigns = () => {
  const campaignsData = [
    {
      // icon: <BiFork />,
      image: "/assets/cc_1.jpg",
      heading: "Fund Raising For Children Food",
      link: "/",
      dtg: "85",
      needed: "9875",
      rem: "4350",
    },
    {
      image: "/assets/cc_e.jpeg",
      heading: "Fund Raising For Education",
      link: "/",
      dtg: "85",
      needed: "2875",
      rem: "1350",
    },
    {
      //icon: <BiSolidInstitution />,
      image: "/assets/cc3.jpg",
      heading: "Fund Raising For Children Homes",
      link: "/",
      dtg: "85",
      needed: "4500",
      rem: "3500",
    },
  ];
  return (
    <Container id="#campaigns" bgColor={"secondary"}>
      <div className={stack({ align: "center" })}>
        <SectionHeader title="campaign" />
        <h1 className={headingRecipe({ visual: "gap" })}>
          Our Running Campaign
        </h1>
        <div
          id="campaign-cards"
          className={grid({
            columns: { sm: 1, md: 2, lg: 3, "2xl": 3 },
            gap: 80,
            mt: 20,
          })}
        >
          {campaignsData.map((campaign, index) => (
            <Card key={index} {...campaign} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Campaigns;
