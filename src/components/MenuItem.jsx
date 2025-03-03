import React from "react";
import { ShoppingCart } from "lucide-react";

const MenuItem = ({ image, tag, name, price }) => {
  return (
    <div className=" rounded-lg p-2">
      <div className="relative">
        <img src={image} alt={tag} className="rounded-lg" />
        <button class="absolute -bottom-5 left-1/4 lg:left-1/5  mt-4 px-5 py-2 bg-Rose-50 border border-Red text-sm cursor-pointer font-semibold rounded-full flex items-center justify-center gap-2 hover:text-Red transition">
          <ShoppingCart color="#c73a0f" size={20} />
          Add to Cart
        </button>
      </div>
      <div className="mt-8">
        <span className="text-sm text-Rose-300 capitalize">{tag}</span>
        <h3 className="font-semibold capitalize">{name}</h3>
        <span className="text-Red font-bold ">${price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
