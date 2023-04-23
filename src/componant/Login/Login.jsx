import {
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ setOpen }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      position={"fixed"}
      bg={"blackAlpha.500"}
      justify={"center"}
      align={"center"}
    >
      <Flex
        borderLeftRadius={"10px"}
        color={"white"}
        flexDirection={"column"}
        p={10}
        h={"75%"}
        bg={"blue.400"}
        w={"20%"}
      >
        <Text fontSize={"2xl"}>Login</Text>
        <Text my={5}>
          get access to your Orders,
          <br /> wishlist and
          <br /> Recomadations
        </Text>
      </Flex>
      <Flex
        borderRightRadius={"10px"}
        textAlign={"center"}
        position={"relative"}
        h={"75%"}
        bg={"white"}
        w={"30%"}
        flexDirection={"column"}
        p={5}
      >
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <FormControl my={7} isRequired>
            <Input
              {...register("Name", { required: true })}
              type="text"
              placeholder="Enter Email/Mobile Number"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              {...register("Email", { required: true })}
              type="email"
              placeholder="Email"
            />
          </FormControl>
          <FormControl id="basic">
            <Button width={"full"} mt={"4"} colorScheme="orange" type="Submit">
              Login
            </Button>
          </FormControl>
        </form>
        <Text my={5}>OR</Text>
        <Button>Request OTP</Button>
        <CloseButton
          onClick={() => setOpen(false)}
          position={"absolute"}
          top={2}
          right={2}
        />
        <Flex justify={"center"}>
          <Link position={"absolute"} bottom={5} color={"blue"}>
            New to Flipcart? creat an account
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
