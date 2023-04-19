import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./parts/Navbar";
import Body from "./parts/Body";
import Footer from "./parts/Footer";

const Main = () => {
  return (
    <Box>
      <Navbar />
      <Body />
      <Footer />
    </Box>
  );
};

export default Main;
