import { createContext, useContext, useState } from "react";

const Cart = createContext();

export const UseCart = () => useContext(Cart);

const Wrapper = ({ children }) => {
  const [item, setItem] = useState([]);

  return <Cart.Provider value={{ item, setItem }}>{children}</Cart.Provider>;
};
export default Wrapper;
