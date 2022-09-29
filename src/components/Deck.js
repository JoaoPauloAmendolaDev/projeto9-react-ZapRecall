import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
import setaChange from "../assets/img/seta_virar.png";

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

const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const questions = [
  {
    question: "O que é JSX?",
    answer:
      "JSX é uma mistura entre HTML e javascript, utilizado no React para facilitar a programação de páginas single-page",
  },
  { question: "Para que serve condicionais em JS?", answer: "Serve para tornar interativa uma página, dependendo de como o usuário interage" },
  {
    question: "Qual é a biblioteca de JS mais baixada no mundo?",
    answer: "React.JS",
  },
  { question: "Quantos tipos de funções existem em JS?", answer: "4" },
];

export default function Deck() {
  let [listaRespostasAbertas, setListaRespostasAbertas] = useState([]);
  let [listaPerguntasAbertas, setListaPerguntasAbertar] = useState([]);

  function clicked(index) {
    let newIndex = index;
    console.log(index);
    setListaPerguntasAbertar([...listaPerguntasAbertas, newIndex]);
  }

  function answerClicked(index) {
    let newIndex = index;
    setListaRespostasAbertas([...listaRespostasAbertas, newIndex]);
  }

  return (
    <div>
      {questions.map(({ question, answer }, index) =>
        listaPerguntasAbertas.includes(index) ? (
          <>
            {listaRespostasAbertas.includes(index) ? (
              <OpenQuestion>{answer}</OpenQuestion>
            ) : (
              <OpenQuestion key={index}>
                {question}
                <img
                  src={setaChange}
                  alt="Seta para virar"
                  onClick={() => answerClicked(index)}
                />
              </OpenQuestion>
            )}
            {console.log(listaPerguntasAbertas)}
          </>
        ) : (
          <PerguntaFechada key={index}>
            <p>Pergunta {index}</p>
            <img src={setaPlay} alt="Seta" onClick={() => clicked(index)} />
          </PerguntaFechada>
        )
      )}
    </div>
  );
}
