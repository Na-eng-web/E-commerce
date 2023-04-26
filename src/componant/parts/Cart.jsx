import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { UseCart } from "../../Contex/CartContex";
const Cart = () => {
  const { item, setItem } = UseCart();
  console.log(item);
  return (
    <Flex
      top={"4.5rem"}
      position={"absolute"}
      justify={"space-between"}
      w={"100%"}
      minH={"100vh"}
    >
      {item.length === 0 ? (
        <Text>Add SOMETHING</Text>
      ) : (
        <Flex p={5} bg={"white"} flexDir={"column"} w={"70%"}>
          {item.map((e, index) => {
            return (
              <Flex
                key={index}
                border={"1px"}
                m={2}
                borderRadius={"5px"}
                h={"13rem"}
              >
                <Box p={5} w={"20%"}>
                  <Image h={"80%"} fit={"contain"} src={e.image} />
                  <Flex mt={3} justify={"center"} align={"center"}>
                    <Button size={"sm"} borderRadius={"50%"}>
                      -
                    </Button>
                    <Text mx={2}>0</Text>
                    <Button size={"sm"} borderRadius={"50%"}>
                      +
                    </Button>
                  </Flex>
                </Box>
                <Box p={5} w={"100%"} mx={5}>
                  <Heading fontSize={"5xl"}>{e.title}</Heading>
                  <Flex my={3} align={"center"}>
                    <Icon fontSize={"3xl"} as={BsCurrencyRupee} />
                    <Text mr={2} textAlign={"left"} fontSize={"3xl"}>
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
                  <Button mx={3} colorScheme="yellow">
                    SAVE FOR LATER
                  </Button>
                  <Button colorScheme="red">Remove</Button>
                </Box>
              </Flex>
            );
          })}

          <Flex justify={"right"}>
            <Button mx={2} w={"30%"} colorScheme="orange">
              Place Order
            </Button>
          </Flex>
        </Flex>
      )}
      <Flex
        right={"0"}
        bg={"white"}
        h={"90%"}
        position={"fixed"}
        w={"30%"}
        p={5}
        justify={"space-between"}
        flexDir={"column"}
      >
        <Box border={"1px"} p={5} bg={"white"} h={"50%"}>
          <Heading>Price Details</Heading>
          <Flex my={3} justify={"space-between"}>
            <Text>Price</Text>
            <Text>pasf</Text>
          </Flex>
          <Flex my={3} justify={"space-between"}>
            <Text>Discount</Text>
            <Text color={"green"}>dis</Text>
          </Flex>
          <Flex my={3} justify={"space-between"}>
            <Text>Delivery</Text>
            <Text color={"green"}>Free</Text>
          </Flex>
          <Divider />

          <Flex align={"center"} my={3} justify={"space-between"}>
            <Heading>Total Price</Heading>
            <Text>0000</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Cart;
