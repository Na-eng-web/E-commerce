import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Data from "../Data";
import Product from "./Product";
// import Carousel from "./Corusal";
const Body = () => {
  const [product, Setproduct] = useState(false);
  const [prd, Setprd] = useState([]);
  return (
    <Box>
      {product && <Product prd={prd} />}

      <Box border={"2px"} h={"15rem"}>
        {/* <Carousel /> */}
        Co
      </Box>
      <Data Setprd={Setprd} Setproduct={Setproduct} />
    </Box>
  );
};

export default Body;
