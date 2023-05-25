import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({children, item}) => {
  return(
    <div className="item">
      <div className="image-name-desc">
        <div className="item-image">
            
        </div>
        <div className="name-desc">
          <p className="name">{item.name}</p>
          <p className="desc">{item.description}</p>
        </div>
      </div>
      <div className="item-children">
        {children}
      </div>
    </div>
    );
}


Item.propTypes = {
    item: PropTypes.object
}

export default Item;