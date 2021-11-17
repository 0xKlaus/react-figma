import React from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";
import Footer from "./components/Footer/Footer";

import BackgroundImg from "./assets/Background/background_img.png";

const App: React.FC = () => {
  return (
    <BackgroundDiv>
      <Header />
      <Middle />
      <Footer />
    </BackgroundDiv>
  );
};

export default App;

export const BackgroundDiv = styled.div`
  height: 100%;
  padding: 50px;
  background-image: url(${BackgroundImg});
  background-size: 100% 100%;
`;
