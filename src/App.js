import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [categories, setCategory] = useState("All");

  if (categories === "breakfast") {
    return (
      <div>
        <Categories setCategory={setCategory} />
        <div className="section-center">
          {items.map((food) => {
            return (
              <>
                {food.category === categories ? (
                  <Menu key={food.id} {...food} />
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  }
  if (categories === "lunch") {
    return (
      <div>
        <Categories setCategory={setCategory} />
        <div className="section-center">
          {items.map((food) => {
            return (
              <>
                {food.category === categories ? (
                  <Menu key={food.id} {...food} />
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  }
  if (categories === "shakes") {
    return (
      <div>
        <Categories setCategory={setCategory} />
        <div className="section-center">
          {items.map((food) => {
            return (
              <>
                {food.category === categories ? (
                  <Menu key={food.id} {...food} />
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  }

  if (categories === "All") {
    return (
      <div>
        <Categories setCategory={setCategory} />
        <div className="section-center">
          {items.map((food) => {
            return <Menu key={food.id} {...food} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
