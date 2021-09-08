import styled from "styled-components";

function Sidebar({ links, setTitle, setContent }) {
  function handleClick(e, link) {
    e.preventDefault();
    setTitle(link.title);
    setContent(link.content);
  }

  return (
    <Div>
      <ul>
        {links.map((link) => (
          <Li key={link.id}>
            <A onClick={(e) => handleClick(e, link)} href={link.title}>
              {link.title}
            </A>
          </Li>
        ))}
      </ul>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  background-color: #d8abb1;
`;

const Li = styled.li`
  padding-top: 100px;
`;
const A = styled.a`
  color: black;
  text-align: justify;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
`;

export default Sidebar;
