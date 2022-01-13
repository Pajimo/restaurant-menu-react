import React from "react";

const Menu = ({ title, img, price, desc }) => {
  return (
    <>
      <div className="menu-item">
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header>
            <h4 className="title">{title}</h4>
            <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
