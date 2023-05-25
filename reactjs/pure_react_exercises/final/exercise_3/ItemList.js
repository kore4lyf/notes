import React from "react";
import Item from "./Item";
import {items} from "./static-data";

const ItemList = ({onAction}) => {
    return(
        items.map(item => (
            <Item key={item.id} item={item}>
                <p className="price">${item.price}</p>
                <button onClick={() => onAction(item.id, item.price)}  className="btn-add-to-cart">
                    Add to Cart
                </button>
            </Item>
            )
        )
    );
}


export default ItemList;