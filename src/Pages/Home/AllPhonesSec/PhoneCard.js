import React from "react";
import ButtonCommon from "../../../Components/ButtonCommon/ButtonCommon";

const PhoneCard = ({ phone }) => {
  const {
    name,
    picture,
    sellername,
    location,
    resaleprice,
    yearsofuse,
    originalprice,
    description,
  } = phone;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-1/2" src={picture} alt={name} />
      </figure>
      <div className="card-body my-auto">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0,100)}...</p>
        <p>Location: {location}</p>

        <div className="flex justify-between">
            <h5 className="text-xl">${resaleprice}</h5> <h5 className="text-xl"><s>${originalprice}</s></h5>
        </div>

        <div className="card-actions justify-end">
            <ButtonCommon>Show Detail</ButtonCommon>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
