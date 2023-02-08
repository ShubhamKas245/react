import React from "react";
import { useParams } from "react-router-dom";
import useRestaurent from "../../utils/useRestaurent";
import { IMG_URL } from "../constants";
import Shimmer from "./Shimmer";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurentMenu = () => {
  const { id } = useParams();

  const restaurent = useRestaurent(id);

  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("grapes"));   // {payload:"Graps"} redux toolkit passing like this
  // };

  const handleAddItem=(item)=>{
    dispatch((addItem(item)))
  
  }
  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className=" flex my-2 mx-3 gap-2 ">
      <div>
        <h1>Restaurent id : {id} </h1>
        <h2>{restaurent.name}</h2>
        <img src={IMG_URL + restaurent.cloudinaryImageId} alt="menu" />
        <h2>{restaurent?.area}</h2>
        <h2>{restaurent?.city}</h2>
        <h2>{restaurent?.avgRating} stars</h2>
        <h3>{restaurent?.costForTwoMsg}</h3>
       
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurent?.menu?.items).map((item, id) => (
            <li key={id}>{item.name}  <button className="p-2 m-2 bg-green-100" onClick={()=>handleAddItem(item)}>
            Add Items
          </button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
