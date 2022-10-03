import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import Fechadas from "./MapeamentoPerguntas";

export default function App() {
  const [answered, setAnswered] = useState([]);
  return (
    <>
      <ScreenContainer>
        <LogoConteiner>
          <img src={logo} alt="logo ZapRecall" />
          <h1>ZapRecall</h1>
        </LogoConteiner>
        <Fechadas
          answered={answered}
          setAnswered={setAnswered}
          data-identifier="flashcard"
        />
      </ScreenContainer>
      <Footer>
        <p data-identifier="flashcard-counter">{answered.length}/8 concluídos</p>
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
`;