import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import ContextProvider from "./storeContext/ContextProvider";
function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false)
  }
  return (
    <ContextProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
