import React from "react";
import { ShoppingCart } from "lucide-react";

const MenuItem = ({ dessert, onAddToCart }) => {
  return (
    <div className=" rounded-lg p-2">
      <div className="relative">
        <img src={dessert.image} alt={dessert.tag} className="rounded-lg" />
        <button
          onClick={() => onAddToCart(dessert)}
          className="absolute -bottom-5 left-1/4 lg:left-1/5  mt-4 px-5 py-2 bg-Rose-50 border border-Red text-sm cursor-pointer font-semibold rounded-full flex items-center justify-center gap-2 hover:text-Red transition"
        >
          <ShoppingCart color="#c73a0f" size={20} />
          Add to Cart
        </button>
      </div>
      <div className="mt-8">
        <span className="text-sm text-Rose-300 capitalize">{dessert.tag}</span>
        <h3 className="font-semibold capitalize">{dessert.name}</h3>
        <span className="text-Red font-bold ">${dessert.price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
