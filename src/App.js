import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./componant/Main/Main";

function App() {
  return <ChakraProvider>{<Main />}</ChakraProvider>;
}

export default App;
