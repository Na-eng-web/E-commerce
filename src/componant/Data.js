import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import React from "react";

const Data = () => {
  const [dataa, Setdat] = useState([]);
  useEffect(() => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    )
      .then((data) => data.json())
      .then((dat) => Setdat(dat));
  }, []);

  return (
    <Flex flexWrap={"wrap"} justify={"space-evenly"}>
      {dataa.map((e, index) => {
        return (
          <Flex
            textAlign={"center"}
            justify={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            // boxShadow={"2xl"}
            w={"30%"}
            // border={"1px"}
            my={2}
            p={5}
            _hover={{ bg: "#ebebe0" }}
          >
            <Image w={"8rem"} h={"10rem"} src={e.image} fit={"contain"} />
            <Text>{e.title}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Data;
