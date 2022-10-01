import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
import setaVirar from "../assets/img/seta_virar.png";
import iconeAcerto from "../assets/img/icone_certo.png";
import iconeQuase from "../assets/img/icone_quase.png";
import iconeErro from "../assets/img/icone_erro.png";

export default function Cartas(props) {
  const { question, answer, index, answered, setAnswered } = props;
  let [local, setLocal] = useState("initial");

  if (local === "initial") {
    return (
      <>
        {console.log("fui chamado no local initial")}
        <PerguntaFechada>
          <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
          <img
            data-identifier="flashcard-show-btn"
            src={setaPlay}
            onClick={() => setLocal("second")}
          />
        </PerguntaFechada>
      </>
    );
  }
  if (local === "second") {
    return (
      <PerguntaAberta>
        <p data-identifier="flashcard-question">{question}</p>
        <img
          data-identifier="flashcard-turn-btn"
          onClick={() => setLocal("third")}
          src={setaVirar}
        />
      </PerguntaAberta>
    );
  }
  if (local === "third") {
    return (
      <PerguntaAberta>
        <p data-identifier="flashcard-answer">{answer}</p>
        <ButtonsContainer>
          <Buttons
            data-identifier="forgot-btn"
            background={"#FF3030"}
            onClick={() => {
              setLocal("wrong");
              setAnswered([...answered, 1]);
            }}
          >
            <p>Não Lembrei</p>
          </Buttons>
          <Buttons
            data-identifier="almost-forgot-btn"
            background={() => "#FF922E"}
            onClick={() => {
              setLocal("maybe");
              setAnswered([...answered, 1]);
            }}
          >
            <p>Quase Acertei!</p>
          </Buttons>
          <Buttons
            data-identifier="zap-btn"
            background={() => "#2FBE34"}
            onClick={() => {
              setLocal("right");
              setAnswered([...answered, 1]);
            }}
          >
            <p>ZAP!!</p>
          </Buttons>
        </ButtonsContainer>
      </PerguntaAberta>
    );
  }

  if (local === "right") {
    return (
      <Right>
        <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
        <img data-identifier="flashcard-status" src={iconeAcerto} />
      </Right>
    );
  }
  if (local === "maybe") {
    return (
      <Maybe>
        <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
        <img data-identifier="flashcard-status" src={iconeQuase} />
      </Maybe>
    );
  }
  if (local === "wrong") {
    return (
      <Wrong>
        <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
        <img data-identifier="flashcard-status" src={iconeErro} />
      </Wrong>
    );
  }
}

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

const PerguntaAberta = styled.div`
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
}
img{
    position:absolute;
    bottom:10px;
    right:10px;
}
`;

const Buttons = styled.div`
  width: 90px;
  height: 50px;
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
  background: ${(props) => props.background};
  border-radius: 5px;
  padding: 5px;
  margin-left: 5px;
`;

const Right = styled.div`
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
  text-decoration: line-through;
  color: #2fbe34;
`;

const Maybe = styled.div`
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
  text-decoration: line-through;
  color: #ff922e;
`;

const Wrong = styled.div`
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
  text-decoration: line-through;
  color: #ff3030;
`;

const ButtonsContainer = styled.div`
  width: 90%;
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
  padding: 5px;
`;
