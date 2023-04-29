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
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ name: "" });
  return (
    <>
      {open && <Login setUser={setUser} setOpen={setOpen} />}
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
          <NavLink to={"/body"}>
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
          </NavLink>
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
              {user.name ? (
                <Flex align={"center"} fontSize={"xl"} fontFamily={"cursive"}>
                  Hello {user.name}
                </Flex>
              ) : (
                <Button
                  // w={"7rem"}
                  bg={"white"}
                  color={"blue.400"}
                  borderRadius={"0"}
                  onClick={() => setOpen(true)}
                >
                  Login
                </Button>
              )}
              <Select placeholder="More" border={"0"} w={"6rem"}></Select>
            </Flex>
            <Flex alignItems={"center"}>
              <NavLink to={"/Cart"}>
                <Icon as={BsCartCheck} w={8} h={8} color={"white"} />
              </NavLink>
              <Text>Cart</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
