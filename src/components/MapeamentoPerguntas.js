import Cartas from "./Perguntas";

const questions = [
  {
    question: "O que é JSX?",
    answer:
      "JSX é uma mistura entre HTML e javascript, utilizado no React para facilitar a programação de páginas single-page",
  },
  {
    question: "Para que serve condicionais em JS?",
    answer:
      "Serve para tornar interativa uma página, dependendo de como o usuário interage",
  },
  {
    question: "Qual é a biblioteca de JS mais baixada no mundo?",
    answer: "React.JS",
  },
  { question: "Quantos tipos de funções existem em JS?", answer: "4" },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    question: "Usamos o npm para __",
    answer: "Gerenciar os pacotes necessários e suas dependências",
  },
  {
    question: "Usamos props para __",
    answer: "Passar diferentes informações para componentes",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "Dizer para o React quais informações quando atualizadas devem renderizar na tela novamente",
  },
];

export default function Fechadas(props) {
  let {answered, setAnswered} = props
  return questions.map((question, index) => {
    return <Cartas
      question={question.question}
      answer={question.answer}
      index={index}
      key={index}
      answered={answered}
      setAnswered={setAnswered}
    />;
  });
}
