import Conteudo from "./conteudo";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import Sidebar from "./sidebar";


 export const links = [
    {
        id: 1,
        title:'Óleo essencial de lavanda',
        content:
        (
            <>
            <p> 
                O óleo essencial de lavanda é um dos óleos essenciais mais usados por conta de sua delicadeza e por não ser irritante para a pele.è idicado para acalmar os nervos, relaxar os músculos, como antidepressivo, antitensão muscular, além de facilitar o sono, é antisséptico e antibacteriano e promove a digestão.
            </p>
            </>
        )
    },

    {
        id: 2,
        title:'Óleo essencial de hortelã',
        content:
        (
            <>
            <p>O óleo essencial de hortelã ajuda nos problemas respiratórios, como asma, bronquite, rinite não-alérgica, sinusite, tosse com catarro, resfriados, dores de cabeça. É excelente para problemas digestivos e intestinais, constipação, mau hálito, enjoos e cólicas, além de ajudar a diminuir a flatulência (gases).
            </p>
            </>
        )
    },

    {
        id: 3,
        title:'Óleo essencial de alecrim',
        content: 
        (
            <>
            <p>O óleo essencial de alecrim é extraído da espécie Rosmarinus officinalis, originária da região do Mediterrâneo, na Europa. A erva sempre foi conhecida por alguns benefícios, como efeitos positivos na memória, função calmante, saborosa especiaria, além de ter aroma agradável.
            </p>
            </>
        )
    }
]


function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container-central">
        <Sidebar />
        <Conteudo />
      </div>
      <Footer />
    </>
  );
}

export default App;
