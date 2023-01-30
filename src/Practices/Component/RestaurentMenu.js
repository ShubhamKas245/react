import React from "react";
import { useParams } from "react-router-dom";
import useRestaurent from "../../utils/useRestaurent";
import { IMG_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {

  const { id } = useParams();

  const restaurent =useRestaurent(id)
  
  return (!restaurent) ? <Shimmer /> : (
    <div className=" flex my-2 mx-3 gap-2 ">
      <div>
        <h1>Restaurent id : {id} </h1>
        <h2>{restaurent.name}</h2>
        <img src={IMG_URL + restaurent.cloudinaryImageId} alt="menu" />
        <h2>{restaurent.area}</h2>
        <h2>{restaurent.city}</h2>
        <h2>{restaurent.avgRating} stars</h2>
      </div>
      {/* <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurent?.menu?.items).map((item, id) => (
            <li key={id}>{item.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default RestaurentMenu;
