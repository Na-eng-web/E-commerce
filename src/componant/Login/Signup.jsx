import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const Signup = () => {
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
        <Text fontSize={"5xl"}>Sign Up</Text>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <Flex my={3}>
          <FormControl mr={3} isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input type="number" />
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input />
        </FormControl>
        <FormControl my={3} isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme={"green"}>Sign Up</Button>
      </Flex>
    </Box>
  );
};

export default Signup;
