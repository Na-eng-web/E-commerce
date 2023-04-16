import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Basic = () => {
  const [user, setUser] = useState(true);
  return (
    <Box>
      <Box h={"3rem"} bg={"blue.700"}>
        Facebook
      </Box>
      <Flex justify={"space-between"} w={"100%"} border={"2px"} h={"92.3vh"}>
        <Box
          bg={"red.200"}
          h={"100%"}
          w={"50%"}
          textAlign={"center"}
          display={"Flex"}
          flexDirection={"column"}
          alignItems={"center"}
          py={10}
        >
          <Text fontSize={"5rem"}>Hello Friends!</Text>
          <Text>
            Enter you details to start your journy with <br /> us
          </Text>
          <Button
            onClick={() => setUser(!user)}
            m={3}
            colorScheme="gray"
            w={"30%"}
          >
            {user ? "SIGN UP" : "Login"}
          </Button>
        </Box>
        <Box w={"80%"}>{user ? <Login /> : <Signup />}</Box>
      </Flex>
    </Box>
  );
};

export default Basic;
