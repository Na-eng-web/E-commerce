import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import React from "react";

const Data = ({ Setprd, Setproduct }) => {
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
            cursor={"pointer"}
            justify={"center"}
            // alignItems={"center"}
            flexDirection={"column"}
            w={"30%"}
            my={2}
            p={5}
            _hover={{ boxShadow: "2xl" }}
            onClick={() => {
              // eslint-disable-next-line
              window.scrollTo({ top: 0, behavior: "smooth" });
              return Setprd(e), Setproduct(true);
            }}
          >
            <Image
              margin={"auto"}
              w={"8rem"}
              h={"10rem"}
              src={e.image}
              fit={"contain"}
            />
            <Text my={2}>{e.title}</Text>
            <Flex h={"fit-content"} mb={2}>
              <Flex
                align={"center"}
                justify={"center"}
                color={"white"}
                mr={1}
                borderRadius={5}
                p={"2px"}
                bg={"green.500"}
                w={"3rem"}
              >
                {e.rating.rate}
                <Icon as={AiFillStar} mx={1} />
              </Flex>
              <Text color={"grey"}>({e.rating.count})</Text>
            </Flex>
            <Flex align={"center"}>
              <Icon fontSize={"xl"} as={BsCurrencyRupee} />
              <Text mr={2} textAlign={"left"} fontSize={"xl"}>
                {e.price}
              </Text>
              <Text
                color={"grey"}
                textDecoration={"line-through"}
                textAlign={"left"}
                // fontSize={"xl"}
              >
                {(e.price + (e.price * 21) / 100).toFixed(2)}
              </Text>
              <Text ml={"2"} color={"green"}>
                {"21% off"}
              </Text>
            </Flex>
            <Text fontSize={"sm"}>Free Delivery</Text>
            <Text fontSize={"sm"}>
              No Cost Emi From ₹{((e.price * 12) / 100).toFixed(2)}/month{" "}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Data;
