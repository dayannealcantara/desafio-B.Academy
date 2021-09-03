import Title from "./titulo";

function Conteudo({ title, content, beneficios}) {
  return (
    <div className="conteudo">
      
      <Title size="2">{title}</Title>
      
   
      <Title size="4">{content}</Title>
        
      <Title size="5">{beneficios}</Title>

   
    </div>
  );
}

export default Conteudo;
