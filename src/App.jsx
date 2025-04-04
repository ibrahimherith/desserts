import { useState } from "react";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import { menuItems } from "./data";
import Container from "./components/Container";
import Main from "./components/Main";

function App() {
  const [desserts, setDesserts] = useState(menuItems);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((items) => {
      const exists = items.find((cartItem) => cartItem.id === item.id);

      if (exists) {
        return items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...items, item];
      }
    });
  };

  const handleDeleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Main>
      <Container>
        <Menu desserts={desserts} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} onDeleteCartItem={handleDeleteCartItem} />
      </Container>
    </Main>
  );
}

export default App;
