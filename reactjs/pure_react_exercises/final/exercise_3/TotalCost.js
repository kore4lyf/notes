import React from "react";
import "./TotalCost.css";

const TotalCost = ({cartItems}) => {
  let totalCost = 0;
  cartItems.forEach( item => {
    totalCost += item.totalItems * item.price;
  });

  // Human readable value
  totalCost = totalCost.toLocaleString("en-US");

  // Set decimal precision to two
  let clipIndex = totalCost.indexOf(".");
  if(clipIndex >= 0){
    totalCost = totalCost.slice(0 ,clipIndex + 3);
  }

  return(
    <p className="total-cost">
      Total: ${totalCost}
    </p>
  )
}

export default TotalCost;