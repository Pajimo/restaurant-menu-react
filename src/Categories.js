import React from "react";

const Categories = ({ setCategory }) => {
  return (
    <div className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <h3 onClick={() => setCategory("All")} className="filter-btn">
          All
        </h3>
        <h3 onClick={() => setCategory("breakfast")} className="filter-btn">
          Breakfast
        </h3>
        <h3 onClick={() => setCategory("lunch")} className="filter-btn">
          Lunch
        </h3>
        <h3 onClick={() => setCategory("shakes")} className="filter-btn">
          Shakes
        </h3>
      </div>
    </div>
  );
};

export default Categories;
