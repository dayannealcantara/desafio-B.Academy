import styled from "styled-components";
import logo from "./imagens/Log.png";

function Title({ children }) {
  return (
    <>
      <Header className="header">
        <Img src={logo} alt="logo loja" />
      </Header>
    </>
  );
}

const Img = styled.img`
  width: 300px;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 80px;
  background-color: #d8abb1;
  color: black;
`;

export default Title;
