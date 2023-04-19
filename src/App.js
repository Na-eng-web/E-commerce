import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
// import Basic from "./componant/Login/Basic";
import Main from "./componant/Main/Main";

function App() {
  return <ChakraProvider>{/* <Basic /> */ <Main />}</ChakraProvider>;
}

export default App;
