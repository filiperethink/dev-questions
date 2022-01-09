import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset, VStack } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { theme } from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import QuestionsScreen from "./screens/QuestionsScreen";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
      font-family: "Messina Sans Black";
      src: local("./fonts/MessinaSans-Black.woff");
      font-weight: normal;
      font-style: normal;
      }
     /* latin */
      @font-face {
      font-family: "Messina Sans";
      src: local("./fonts/MessinaSans-Regular.woff");
      font-weight: normal;
      font-style: normal;
      }
      `}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='questions' element={<QuestionsScreen />} />
        </Routes>
      </BrowserRouter>
      ,<VStack></VStack>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
