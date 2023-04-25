import { Box } from "@chakra-ui/react";
import Navbar from "../parts/Navbar";
import Body from "../parts/Body";
import Footer from "../parts/Footer";
import FIlterBar from "../parts/FIlterBar";
const Main = () => {
  return (
    <Box>
      <Navbar />
      <FIlterBar />
      <Body />
      <Footer />
    </Box>
  );
};

export default Main;
