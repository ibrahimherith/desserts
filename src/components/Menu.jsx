import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ desserts, onAddToCart }) => {
  return (
    <div className="col-span-3">
      <h1 className="text-2xl font-bold mb-5">Desserts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {desserts.map((dessert) => (
          <MenuItem
            key={dessert.id}
            dessert={dessert}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
