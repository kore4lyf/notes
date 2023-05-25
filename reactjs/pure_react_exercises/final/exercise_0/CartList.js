import React from "react";
import Item from "./Item";
import { items } from "./static-data";
import "./Item.css"
import "./CartList.css";

let cartItems = [];

const CartList = ({sub, add, cart}) => {
    console.log("cart: ", cart);
    cartItems = [];
    cart.forEach(cartItem => {
        // findItemInCart returns an array of an item, for each item id that can
        // be found in the cart
        let findItemInCart = items.filter(item => cartItem.id === item.id );
        
        // extract the object within the array
        let [foundItem] = findItemInCart;


        // Merge the extracted object with the cartItem object (so that it can 
        // contain details about the totalItems detail)
        findItemInCart = {...foundItem, ...cartItem};

        // Add the object the cartItem array
        cartItems.push(findItemInCart);
    });

    return(
        cartItems.map(item => (
            <Item key={item.id} item={item}>
                <p className="price">${item.price}</p>
                <div className="numberOfOrders">
                <button onClick={() => sub(item.id)} className="negative">
                    -
                </button>
                <input className="item-orders" type="text" value={item.totalItems} disabled/>
                <button onClick={() => add(item.id)} className="negative">
                    +
                </button>
                </div>
            </Item>
            )
        )
    );
}

export default CartList;