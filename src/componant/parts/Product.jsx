import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Table,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";

const Product = ({ prd }) => {
  return (
    <Flex bg={"red.200"} px={10} w={"100%"} h={"100vh"}>
      <Flex
        flexDir={"column"}
        justify={"flex-start"}
        align={"center"}
        bg={"white"}
        w={"40%"}
      >
        <Flex
          p={5}
          border={"0.5px solid #ebebe0"}
          justify={"center"}
          w={"100%"}
          h={"60%"}
        >
          <Image src={prd.image} fit={"contain"} />
        </Flex>
        <Flex m={3} justify={"center"} w={"100%"}>
          <Button p={4} color={"White"} mr={5} w={"30%"} colorScheme="yellow">
            <Icon as={BsCartCheck} w={7} h={7} color={"white"} />
            <Text> ADD TO CART </Text>
          </Button>
          <Button w={"30%"} colorScheme="orange">
            <Icon as={AiFillThunderbolt} w={7} h={7} color={"white"} />
            BUY NOW
          </Button>
        </Flex>
      </Flex>
      <Flex p={5} bg={"white"} flexDir={"column"} w={"60%"}>
        <Heading fontSize={"3xl"}>{prd.title}</Heading>
        <Flex h={"fit-content"}>
          <Box
            mr={1}
            borderRadius={5}
            p={"2px"}
            bg={"green.500"}
            w={"fit-content"}
          >
            {prd.rating.rate}
          </Box>
          <Text color={"grey"}>({prd.rating.count})</Text>
        </Flex>
        <Text fontSize={"5xl"}>₹{prd.price}</Text>
        <Text mb={2} fontSize={"sm"}>
          {prd.description}
        </Text>
        <Text>Available offer</Text>
        <List>
          <ListItem>
            <ListIcon color={"green.500"} as={MdLocalOffer} />
            Bank offer 5% disccount on SBI credit card
          </ListItem>
          <ListItem>
            <ListIcon color={"green.500"} as={MdLocalOffer} />
            Bank offer 10% unlimited cash back on Flipcard axis bank credit card
          </ListItem>
          <ListItem>
            <ListIcon color={"green.500"} as={MdLocalOffer} />
            Purchase this iten and get 500 off on Ac
          </ListItem>
          <ListItem>
            <ListIcon color={"green.500"} as={MdLocalOffer} />
            Partner offer 10% upto 500 of on next furniture
          </ListItem>
        </List>

        <Table variant={"unstyled"}>
          <Tr>
            <Td>
              <Text color={"grey"}>Delivery</Text>
            </Td>
            <Td>
              {" "}
              <Text fontWeight={"bold"}> Dileverd By Friday-30 may | free</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text color={"grey"}>Warranty</Text>
            </Td>
            <Td>
              <Text fontWeight={"bold"}> 30 Days</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text color={"grey"}>Seller</Text>
            </Td>
            <Td>
              <Text fontWeight={"bold"}>
                {" "}
                SuperCom.net <br />
                charthana maharashtra India
              </Text>
            </Td>
          </Tr>
        </Table>
      </Flex>
    </Flex>
  );
};

export default Product;
