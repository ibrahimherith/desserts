import React from "react";
import { X } from "lucide-react";

const cartItems = [1];

const Cart = () => {
  const itemsNo = cartItems.length;
  return (
    <div className="">
      <div className="bg-Rose-50 w-full p-4">
        <h2 className="text-Red font-bold capitalize mb-4">Your cart(0)</h2>
        {itemsNo > 0 ? (
          <div className="space-y-6">
            <ul>
              <li className="py-4 border-b border-gray-200">
                <p className="font-bold">Classic tiramisu</p>
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-Red font-semibold">1x</span>
                    <span>@$5.5</span>
                    <span className="font-semibold">$5.5</span>
                  </div>
                  <X size={20} />
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-between">
              <p>Order Total</p>
              <h3 className="text-xl font-bold">$5.5</h3>
            </div>
            <button className="w-full p-2 rounded-full bg-Red text-white font-semibold hover:bg-Rose-500">
              Confirm Order
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img
              src="../public/assets/images/illustration-empty-cart.svg"
              alt=""
            />
            <p className="text-sm">Your added items will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
