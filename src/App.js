import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./componant/Main/Main";
import Wrapper from "./Contex/CartContex";

function App() {
  return (
    <Wrapper>
      <ChakraProvider>{<Main />}</ChakraProvider>
    </Wrapper>
  );
}

export default App;
