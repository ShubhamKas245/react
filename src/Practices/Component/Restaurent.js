import React from "react";
import { IMG_URL } from "../constants";


const RestaurentCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
    return (
      <div className="w-[200px] h-72 m-2 p-2 shadow-lg bg-pink-50  hover:bg-gray-200">
        <img
          src={IMG_URL+cloudinaryImageId}
          alt="card" className="object-fit"
        />
        <h2 className="text-center font-bold text-xl">{name}</h2>
        <p className="text-center" >{cuisines.join(", ")}</p>
        <h4 className="text-center">{lastMileTravelString} </h4>
      </div>
    );
  };

  export default RestaurentCard;