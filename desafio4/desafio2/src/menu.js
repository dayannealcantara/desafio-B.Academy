import styled from "styled-components";

function Content() {
  return (
    <Div>
      <h2> A natureza a favor do seu bem-estar</h2>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #e0bcb7;
  padding: 30px;
`;
export default Content;
