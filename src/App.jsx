import { useState } from "react";
import Cart from "./components/Cart";
import Menu from "./components/Menu";

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

function App() {
  const [desserts, setDesserts] = useState(menuData);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (selectedItem) => {
    setCartItems((items) => [...items, selectedItem]);
  };

  return (
    <div className="bg-Rose-100 min-h-screen py-8">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-8 py-4 lg:grid-cols-4">
        <Menu desserts={desserts} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
}

export default App;
