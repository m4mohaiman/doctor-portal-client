import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "opening hours",
      disc: "Open 9AM to 6AM Everyday",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Address",
      disc: "Dhaka, Bangladesh",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      disc: "Call us at 01866776762",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];

  return <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-3 lg:gird-cols-3">
        {
          cardData.map(card => <InfoCard
            id={card.id}
            card={card} >
          </InfoCard>)
        }
  </div>;
};

export default InfoCards;
