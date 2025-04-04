import React from "react";
import { X } from "lucide-react";

const Cart = ({ cartItems, onDeleteCartItem }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="">
      <div className="bg-Rose-50 w-full p-4">
        <h2 className="text-Red font-bold capitalize mb-4">
          Your cart({cartItems.length})
        </h2>
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="py-4 border-b border-gray-200">
                  <p className="font-bold">{item.name}</p>
                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      <span className="text-Red font-semibold">
                        {item.quantity} x
                      </span>
                      <span>{item.price} =</span>
                      <span className="font-semibold">
                        {item.quantity * item.price}
                      </span>
                    </div>
                    <button
                      onClick={() => onDeleteCartItem(item.id)}
                      className="cursor-pointer"
                    >
                      <X size={20} color="red" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <p>Order Total</p>
              <h3 className="text-xl font-bold">{total} TSH</h3>
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
