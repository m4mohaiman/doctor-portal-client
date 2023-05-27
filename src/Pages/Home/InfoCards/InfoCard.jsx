import React from "react";

const InfoCard = ({ card }) => {
  const { name, disc, icon, bgClass } = card;
  return (
    <div className={`card p-6 card-side bg-base-100 shadow-xl ${bgClass} text-white`}>
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
