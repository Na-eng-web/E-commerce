import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import Login from "../Login/Login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Login setOpen={setOpen} />}
      <Box
        w={"100%"}
        zIndex={50}
        position={"fixed"}
        color={"white"}
        bg={"blue.400"}
        p={4}
        px={10}
      >
        <Flex justifyContent={"space-evenly"}>
          <Box p={1} h={"2rem"}>
            <Image
              h={"100%"}
              src={
                "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              }
              alt="FLipCart"
            />
            <Flex h={"100%"}>
              <Text>Explore Plus</Text>
              <Image
                h={"70%"}
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              />
            </Flex>
          </Box>
          <InputGroup bg={"white"} color={"black"} w={"30rem"}>
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon color="blue.300" />}
            />
            <Input
              type="tel"
              placeholder="Search for Product,Brands and More"
              borderRadius={"0"}
            />
          </InputGroup>

          <Flex align={"center"} w={"40%"} justify={"space-between"}>
            <Flex justify={"space-evenly"}>
              <Button
                w={"7rem"}
                bg={"white"}
                color={"blue.400"}
                borderRadius={"0"}
                onClick={() => setOpen(true)}
              >
                Login
              </Button>
              <Select placeholder="More" border={"0"} w={"6rem"}></Select>
            </Flex>
            <Flex alignItems={"center"}>
              <Icon as={BsCartCheck} w={8} h={8} color={"white"} />
              <Text>Cart</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
