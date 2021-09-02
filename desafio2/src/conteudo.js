import Title from "./titulo";

function Conteudo() {
  return (
    <div className="conteudo">
      <Title size="1">Óleos essenciais</Title>
      <Title size="2">Um pouco sobre os óleos essenciais</Title>
      <p>
      Os óleos essenciais são compostos voláteis produzidos pelas plantas para a sua sobrevivência, pois são substâncias químicas que exercem as funções de defesa e de atração de polinizadores, além de inibir a ação de alguns herbívoros. Alguns protegem contra o ataque de bactérias ou fungos, outros são conhecidos por serem alelopáticos. Os componentes majoritários são os sesquiterpenóides e monoterpenóides, os quais são altamente voláteis e contribuem para a fragrância ou essência das plantas que os produzem.
      </p>

      <Title size="3">Benefícios dos óleos essenciais</Title>
      <p>Determinados óleos essenciais, como os de eucalipto, lavanda, canela, tomilho e melaleuca são capazes de agir como antisséptico, anti-inflamatório e antibacteriano, induzindo danos às estruturas celulares de bactérias e fungos como Escherichia coli e Cândida albicans.</p>
      
      <ul>
      <Title size="4">Conheça os principais oléos essenciais</Title>
        <li>Óleo essencial de lavanda</li>
        <li>Óleo essencial de laranja</li>
        <li>Óleo essencial de alecrim</li>
        <li>Óleo essencial de hortelã</li>
        <li>Óleo essencial de citronela</li>
      </ul>

      <article >
        <Title size="5">Exemplo</Title>
        <Title size="6">Exemplo2</Title>
      </article>
    </div>
  );
}

export default Conteudo;
