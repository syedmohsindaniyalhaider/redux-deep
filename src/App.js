import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const toggle = useSelector((state) => state.toggle.isVisible); // we first get the key that is mentioned in store and then access the state of that slice
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch("https://react-https-9c624-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);
  return (
    <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
