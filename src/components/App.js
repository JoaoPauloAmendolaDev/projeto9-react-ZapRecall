import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import Deck from "./Deck"

export default function App() {
  return (
    <>
      <ScreenContainer>
        <LogoConteiner>
          <img src={logo} />
          <h1>ZapRecall</h1>
        </LogoConteiner>
          <Deck />
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
   {
    background-color: #fb6b6b;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
  }
`;
const LogoConteiner = styled.div`
   {
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
      width: 52px;
    }
    h1 {
      font-family: "Righteous";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: #ffffff;
      margin-left: 20px;
    }
  }
`;

