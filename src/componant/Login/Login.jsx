import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Box>
      <Flex
        margin={"auto"}
        my={"5"}
        justifyContent={"center"}
        w={"60%"}
        textAlign={"Center"}
        flexDir={"column"}
        p={5}
      >
        <Text fontSize={"5xl"}>Login</Text>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl my={3} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme={"green"}>Login</Button>
      </Flex>
    </Box>
  );
};

export default Login;
