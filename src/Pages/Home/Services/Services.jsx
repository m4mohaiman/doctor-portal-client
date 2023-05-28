import React from "react";
import Service from "./Service";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";

const Services = () => {
  const serviceCardData = [
    {
      id: 1,
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptate illo blanditiis",
      img: cavity,
    },
    {
      id: 2,
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptate illo blanditiis",
      img: fluoride,
    },
    {
      id: 3,
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptate illo blanditiis",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Service
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid gap-8 gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceCardData.map((card) => (
          <Service id={card.id} card={card}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
