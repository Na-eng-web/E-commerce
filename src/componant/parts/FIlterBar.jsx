import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
const img = [
  {
    name: "Grocery",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  },
  {
    name: "Mobile",

    img: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    name: "Fashion",
    img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    name: "Electronics",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
  },
  {
    name: "Home",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    name: "Application",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
  },
  {
    name: "Travel",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    name: "Top Offer",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    name: "Beauty,Toys",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
  },
  {
    name: "Two Wheelers",
    img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
  },
];

const FIlterBar = () => {
  return (
    <Flex align={"center"} justify={"space-evenly"} p={5} h={"fit-content"}>
      {img.map((e, index) => {
        return (
          <Flex
            cursor={"pointer"}
            align={"center"}
            justify={"space-around"}
            flexDir={"column"}
          >
            <Image h={20} w={20} fit={"contain"} src={e.img} />
            <Text>{e.name}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default FIlterBar;
