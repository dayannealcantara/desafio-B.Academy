import Title from "./titulo";

function Conteudo({ title, content}) {
  return (
    <div className="conteudo">
           
      <Title size="2"> Um pouco sobre os óleos essenciais</Title>
      <p>
      Os óleos essenciais são compostos voláteis produzidos pelas plantas para a sua sobrevivência, pois são substâncias químicas que exercem as funções de defesa e de atração de polinizadores, além de inibir a ação de alguns herbívoros. Alguns protegem contra o ataque de bactérias ou fungos, outros são conhecidos por serem alelopáticos. Os componentes majoritários são os sesquiterpenóides e monoterpenóides, os quais são altamente voláteis e contribuem para a fragrância ou essência das plantas que os produzem.
      </p>

      <Title size="2"> Alguns Benefícios</Title>
      <p>No corpo, por apresentarem funções terapêuticas, farmacológicas e cosméticas, os óleos essenciais têm como principais benefícios:</p>
      <ul> 
        <li className="beneficios">Melhora e promoção da sensação de bem-estar;</li>
        <li className="beneficios">Alívio nos sintomas de doenças;</li>
        <li className="beneficios">Amenização de dores;</li>
        <li className="beneficios">Fortalecimento das defesas do corpo;</li>
        <li className="beneficios">Opção natural na composição de cosméticos.</li>
      </ul>
      <Title size="3">{title}</Title>
         
      <Title size="4">{content}</Title>   

     </div>
    
  );
}

export default Conteudo;
