import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Basic from "./componant/Login/Basic";

function App() {
  return (
    <ChakraProvider>
      <Basic />
    </ChakraProvider>
  );
}

export default App;
