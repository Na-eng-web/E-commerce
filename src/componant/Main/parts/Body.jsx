import { Box, Flex, Image, Link, Select, Text } from "@chakra-ui/react";
import React from "react";
import Data from "../../../Data";
// import CaptionCarousel from "./Corusal";
const Body = () => {
  return (
    <Box>
      <Flex m={4} justifyContent={"space-around"}>
        <Select w={"fit-content"} placeholder="Filter Price">
          <option value="option1">Low to High</option>
          <option value="option2"> High to Low </option>
        </Select>
        <Select w={"fit-content"} placeholder="Select Gender">
          <option value="option1">Children</option>
          <option value="option2">Male</option>
          <option value="option3">Female</option>
        </Select>
        <Select w={"fit-content"} placeholder="Catagory">
          <option value="option1">Mobile</option>
          <option value="option2">Cloth's</option>
          <option value="option2">Glosary</option>
        </Select>
      </Flex>
      <Box border={"2px"} h={"15rem"}>
        {/* <CaptionCarousel /> */}
        Co
      </Box>
      {/* <Flex flexWrap={"wrap"} justifyContent={"space-evenly"}>
        {Mobile.map((e, index) => (
          <Flex
            h={"3rem"}
            w={"fit-content"}
            key={index}
            flexDirection={"column"}
          >
            <Image src={e.image} alt="img" />
            <Text>{e.name}</Text>
          </Flex>
        ))}
      </Flex> */}
      <Data />
    </Box>
  );
};

export default Body;
