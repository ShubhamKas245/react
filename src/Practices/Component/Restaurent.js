import React, { useContext } from "react";
import UseContext from "../../utils/UseContext";
import { IMG_URL } from "../constants";


const RestaurentCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
  const {user}=useContext(UseContext);
    return (
      <div className="w-[200px] h-72 m-2 p-2 shadow-lg bg-pink-50  hover:bg-gray-200">
        <img
          src={IMG_URL+cloudinaryImageId}
          alt="card" className="object-fit"
        />
        <h2 className=" font-bold text-xl">{name}</h2>
        <p >{cuisines.join(", ")}</p>
        <h4>{lastMileTravelString} </h4>
        <h4>{user.name}</h4>
      </div>
    );
  };

  export default RestaurentCard;