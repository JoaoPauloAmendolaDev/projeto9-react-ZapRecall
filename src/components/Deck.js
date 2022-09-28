import styled from "styled-components";

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let questions = [
  "O que é JSX?",
  "Para que serve condicionais em JS?",
  "Qual é a biblioteca de JS mais baixada no mundo?",
  "Quantos tipos de funções existem em JS?",
];

export default function Deck() {
  return (
    <>
      {questions.map((question, index) => (
        <PerguntaFechada>{question}</PerguntaFechada>
      ))}
    </>
  );
}

