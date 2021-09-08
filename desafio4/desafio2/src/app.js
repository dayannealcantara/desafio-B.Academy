import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Conteudo from "./conteudo";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import Sidebar from "./sidebar";

const links = [
  {
    id: 1,
    title: "Óleo essencial de lavanda",
    content:
      "O óleo essencial de lavanda é um dos óleos essenciais mais usados por conta de sua delicadeza e por não ser irritante para a pele.è idicado para acalmar os nervos, relaxar os músculos, como antidepressivo, antitensão muscular, além de facilitar o sono, é antisséptico e antibacteriano e promove a digestão.",
  },

  {
    id: 2,
    title: "Óleo essencial de hortelã",
    content:
      "O óleo essencial de hortelã ajuda nos problemas respiratórios, como asma, bronquite, rinite não-alérgica, sinusite, tosse com catarro, resfriados, dores de cabeça. É excelente para problemas digestivos e intestinais, constipação, mau hálito, enjoos e cólicas, além de ajudar a diminuir a flatulência (gases).",
  },

  {
    id: 3,
    title: "Óleo essencial de alecrim",
    content:
      "O óleo essencial de alecrim é extraído da espécie Rosmarinus officinalis, originária da região do Mediterrâneo, na Europa. A erva sempre foi conhecida por alguns benefícios, como efeitos positivos na memória, função calmante, saborosa especiaria, além de ter aroma agradável.",
  },
];

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header />
      <Menu />
      <Div className="container-central">
        <Sidebar links={links} setTitle={setTitle} setContent={setContent} />
        <Conteudo title={title} content={content} />
      </Div>
      <Footer />
    </>
  );
}

const Div = styled.div`
  display: flex;
  height: 800px;
`;
const GlobalStyle = createGlobalStyle` 
 *{
    box-sizing: border-box;
}

`;

export default App;
