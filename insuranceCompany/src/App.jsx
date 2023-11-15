import React from "react";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { Home } from "./views";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
