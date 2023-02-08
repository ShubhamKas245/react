import React from 'react'
import { IMG_URL } from "../constants";


const FoodItem =({name,description,cloudinaryImageId,price}) => {
      return (
        <div className="w-[200px] h-full m-2 p-2 shadow-lg bg-pink-50  hover:bg-gray-200">
          <img
            src={IMG_URL+cloudinaryImageId}
            alt="card" className="object-fit"
          />
          <h2 className=" font-bold text-xl">{name}</h2>
          <p >{description}</p>
          <h4 className='font-bold'>Rs.{price/100} </h4>
        </div>
      );
    };

export default FoodItem