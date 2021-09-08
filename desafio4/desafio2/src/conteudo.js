import Title from "./titulo";
import styled from "styled-components";
import lavanda from './imagens/lavanda.jpg'
import hortela from './imagens/hortela.jpg'
import alecrim from './imagens/alecrim.jpg'

function Conteudo({ title, content}) {
  return (
    <Div>
           
      <Title size="2"> Um pouco sobre os óleos essenciais</Title>
      <P>
      Os óleos essenciais são compostos voláteis produzidos pelas plantas para a sua sobrevivência, pois são substâncias químicas que exercem as funções de defesa e de atração de polinizadores, além de inibir a ação de alguns herbívoros. Alguns protegem contra o ataque de bactérias ou fungos, outros são conhecidos por serem alelopáticos. Os componentes majoritários são os sesquiterpenóides e monoterpenóides, os quais são altamente voláteis e contribuem para a fragrância ou essência das plantas que os produzem.
      </P>

      <Title size="2"> Alguns Benefícios</Title>
      <P>No corpo, por apresentarem funções terapêuticas, farmacológicas e cosméticas, os óleos essenciais têm como principais benefícios:</P>
      <ul> 
        <Li>Melhora e promoção da sensação de bem-estar;</Li>
        <Li>Alívio nos sintomas de doenças;</Li>
        <Li>Amenização de dores;</Li>
        <Li>Fortalecimento das defesas do corpo;</Li>
        <Li>Opção natural na composição de cosméticos.</Li>
      </ul>

      <Img src={lavanda} alt='óleo lavanda' />
      <Img src={hortela} alt='óleo hortela' />
      <Img src={alecrim} alt='óleo alecrim' />

      <Title size="3">{title}</Title>
         
      <Title size="4">{content}</Title>  
       

     </Div>
    
  );
}

const Div = styled.div`
background-color: #F9E6E6;
width: 80%;
text-align: center;
padding: 20px;
`;

const P = styled.p`
text-align: justify;
padding: 0 20px;
line-height: 25px;
`;

const Li = styled.li`
text-align: justify;
line-height: 25px;
`;

const Img = styled.img`
width: 200px;
padding: 20px;

`;


export default Conteudo;
