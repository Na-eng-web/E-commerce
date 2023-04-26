import { Box } from "@chakra-ui/react";
import Navbar from "../parts/Navbar";
import Body from "../parts/Body";
import Footer from "../parts/Footer";
import Cart from "../parts/Cart";
const Main = () => {
  return (
    <Box>
      <Navbar />
      <Cart />
      <Body />
      <Footer />
    </Box>
  );
};

export default Main;
