import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ButtonCommon from "../../../Components/ButtonCommon/ButtonCommon";
import { AuthContext } from "../../../Context/AuthProvider";

const PhoneCard = ({ phone, setCategoryName }) => {
  const {user} = useContext(AuthContext)
  const {
    _id,
    name,
    picture,
    sellername,
    location,
    resaleprice,
    yearsofuse,
    originalprice,
    description,
    category
  } = phone;

  // http://localhost:5000/phone/637f5c48460053f52030daa5

  return (
    <div className="card card-side bg-base-100 shadow-xl max-h-[340px]">
      <figure>
        <img src={picture} alt={name} />
      </figure>
      <div className="card-body my-auto">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0,100)}...</p>
        <p>Location: {location}</p>
        <p>use: {yearsofuse} year</p>

        <div className="flex justify-between">
            <h5 className="text-xl text-primary">Price: <span className="font-bold">৳{resaleprice}</span></h5> <h5 className="text-xl text-gray-300"><s>৳{originalprice}</s></h5>
        </div>

        <div className="card-actions justify-end">
            <Link to={`/phone/${_id}`}><button className="btn btn-primary">Show Detail</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
