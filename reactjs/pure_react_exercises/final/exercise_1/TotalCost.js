import React from "react";
import "./TotalCost.css";

const TotalCost = ({cartItems}) => {
  let cost = 0;
  cartItems.forEach( item => {
    cost += item.totalItems * item.price;
  });

  cost = cost.toLocaleString("en-US");
  let clipIndex = cost.indexOf("z");
  if(clipIndex >= 0){
    cost = cost.slice(0 ,clipIndex + 3)
  }
  
  return(
    <p className="total-cost">
      Total: ${cost}
    </p>
  )
}

export default TotalCost;