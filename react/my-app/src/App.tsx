import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "./components/Page";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Page />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
