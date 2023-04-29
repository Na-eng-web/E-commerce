import { Box } from "@chakra-ui/react";
import Navbar from "../parts/Navbar";
import Body from "../parts/Body";
import Footer from "../parts/Footer";
import Cart from "../parts/Cart";
import { Navigate, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/Body" element={<Body />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default Main;
