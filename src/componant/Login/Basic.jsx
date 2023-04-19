import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Basic = () => {
  const [user, setUser] = useState(true);
  return (
    <Box textAlign={"center"}>
      <Flex
        px={5}
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={"blue.700"}
      >
        <Text fontSize={"5xl"} color={"white"}>
          ByeIt
        </Text>
        <Button onClick={() => setUser(!user)} colorScheme="gray">
          {user ? "SIGN UP" : "Login"}
        </Button>
      </Flex>

      <Box>{user ? <Login /> : <Signup />}</Box>

      {user && (
        <Text>
          New to ByeIt{" "}
          <Link color={"blue"} onClick={() => setUser(!user)}>
            Signup
          </Link>{" "}
          here
        </Text>
      )}
    </Box>
  );
};

export default Basic;
