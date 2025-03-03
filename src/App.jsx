import Cart from "./components/Cart";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="bg-Rose-100 min-h-screen py-8">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-8 py-4 lg:grid-cols-4">
        <Menu />
        <Cart />
      </div>
    </div>
  );
}

export default App;
