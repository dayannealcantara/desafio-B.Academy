import Title from "./titulo";

function Conteudo() {
  return (
    <div className="conteudo">
      <Title size="2">Óleos essenciais</Title>
      <p>
        Os óleos essenciais são substâncias sintetizadas, armazenadas e
        liberadas pelas plantas. Sendo completamente de origem vegetal, os óleos
        essenciais proporcionam benefícios para a saúde e bem-estar físico e
        emocional por meio da aromaterapia.
      </p>

      <ul>
        <p>Conheça os principais oléos essenciais</p>
        <li>Óleo essencial de lavanda</li>
        <li>Óleo essencial de laranja</li>
        <li>Óleo essencial de alecrim</li>
        <li>Óleo essencial de hortelã</li>
        <li>Óleo essencial de citronela</li>
      </ul>

      <article >
        <Title size="3">Óleos essenciais</Title>
        <Title size="4">Óleos essenciais</Title>
        <Title size="5">Óleos essenciais</Title>
        <Title size="6">Óleos essenciais</Title>
        <Title size="10">Óleos essenciais</Title>
      </article>
    </div>
  );
}

export default Conteudo;
