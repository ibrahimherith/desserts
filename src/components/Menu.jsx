import React from "react";
import MenuItem from "./MenuItem";

const menuData = [
  {
    tag: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    image: "../public/assets/images/image-waffle-desktop.jpg",
  },
  {
    tag: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: "../public/assets/images/image-creme-brulee-desktop.jpg",
  },
  {
    tag: "Macaron",
    name: " Macaron Mix of Five",
    price: 8.0,
    image: "../public/assets/images/image-macaron-desktop.jpg",
  },
  {
    tag: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: "../public/assets/images/image-tiramisu-desktop.jpg",
  },
  {
    tag: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: "../public/assets/images/image-baklava-desktop.jpg",
  },
  {
    tag: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: "../public/assets/images/image-meringue-desktop.jpg",
  },
  {
    tag: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: "../public/assets/images/image-cake-desktop.jpg",
  },
  {
    tag: "Brownie",
    name: "Salted Caramel Brownie",
    price: 5.5,
    image: "../public/assets/images/image-brownie-desktop.jpg",
  },
  {
    tag: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 5.5,
    image: "../public/assets/images/image-panna-cotta-desktop.jpg",
  },
];

const Menu = () => {
  return (
    <div className="col-span-3">
      <h1 className="text-2xl font-bold mb-5">Desserts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menuData.map((item, index) => (
          <MenuItem
            key={index}
            tag={item.tag}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
