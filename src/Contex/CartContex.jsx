import { createContext, useContext, useState } from "react";

const Cart = createContext();

export const UseCart = () => useContext(Cart);

const Wrapper = ({ children }) => {
  const [item, setItem] = useState([]);
  const arr2 = item.reduce((a, b) => {
    let i = a.findIndex((x) => x.id === b.id);
    return i === -1 ? a.push({ ...b, id: b.id, times: 1 }) : a[i].times++, a;
  }, []);

  return <Cart.Provider value={{ item, setItem }}>{children}</Cart.Provider>;
};
export default Wrapper;
