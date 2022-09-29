import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import Deck from "./Deck";

export default function App() {
  return (
    <>
      <ScreenContainer>
        <LogoConteiner>
          <img src={logo} alt="logo ZapRecall" />
          <h1>ZapRecall</h1>
        </LogoConteiner>

        <Deck />
      </ScreenContainer>
      <Footer>
        <ContainerBotoes>
          <button>Não Lembro!</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </ContainerBotoes>
        <p>0/4 concluídos</p>
      </Footer>
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
const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  ContainerBotoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

  button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
  }
`;
