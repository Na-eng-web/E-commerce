import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Data from "./Data";
import Product from "./Product";
const Body = () => {
  const [product, Setproduct] = useState(false);
  const [prd, Setprd] = useState([]);
  return (
    <Box top={"5rem"} position={"absolute"}>
      {product && <Product prd={prd} />}
      <Data Setprd={Setprd} Setproduct={Setproduct} />
    </Box>
  );
};

export default Body;
