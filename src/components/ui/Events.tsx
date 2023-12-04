import { headingRecipe } from "@/variants";
import { stack } from "../../../styled-system/patterns";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Card from "../event/Card";

const Events = () => {
  return (
    <Container id="#events">
      <div className={stack({})}>
        <div className={stack({ align: "center" })}>
          <SectionHeader title="Events" />
          <h1 className={headingRecipe({ visual: "gap" })}>Upcoming Events</h1>
        </div>
        <div
          className={stack({
            mt: 30,
            gap: 0,
            "& #event-card:last-of-type": {
              borderBottom: "1px solid #eee",
            },
          })}
        >
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Container>
  );
};

export default Events;
