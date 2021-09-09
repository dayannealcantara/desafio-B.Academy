import styled from "styled-components";
import facebook from "./imagens/facebook.svg";
import github from "./imagens/github.svg";
import instagram from "./imagens/instagram.svg";
import linkedin from "./imagens/linkedin.svg";

function Footer() {
  return (
    <Footerf>
      <nav>
        <Ul>
          <Li>
            <A href="https://www.instagram.com/dayanneal/">
              <Img src={instagram} alt="instagram" />
            </A>
          </Li>

          <Li>
            <A href="https://github.com/dayannealcantara">
              <Img src={github} alt="github" />
            </A>
          </Li>

          <Li>
            <A href="https://www.linkedin.com/in/dayanne-alcantara-70007519a/">
              <Img src={linkedin} alt="linkedin" />
            </A>
          </Li>
        </Ul>
      </nav>

      <h4>
        Desafio bootcamp Brainn.com&emsp;|&emsp; Elaborado por Dayanne Alcantara
      </h4>
    </Footerf>
  );
}

const Footerf = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: #e0bcb7;
  color: black;
  align-items: center;
`;

const Ul = styled.ul`
  text-align: center;
  padding: 0;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0 5px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 20px;
`;

const A = styled.a`
  font-weight: bold;
  text-decoration: none;
`;

export default Footer;
