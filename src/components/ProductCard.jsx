import React from "react";
import card1 from "/card1.jpg";

const ProductCard = (props) => {
  return (
    <div>
      <div className="card flex border-2 border-red-900 w-96 ">
        <div className="img h-40 ">
          <img className="h-40" src={card1} alt="not found" />
        </div>
        <div className="details p-2">
          <div className="text-5xl font-bold opacity-50 mt-2">
            {props.ProductNumber}
          </div>
          <div className="text-lg font-semibold mt-2">{props.ProductName}</div>
          <div className="text-sm mt-2">{props.Productdetails}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
