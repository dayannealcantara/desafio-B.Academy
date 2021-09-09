import styled from "styled-components";

function Title({ children }) {
  return (
    <Header>
      <h1> Cadastro de carros</h1>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 80px;
  background-color: #9c9c9c;
  color: black;
`;

export default Title;
