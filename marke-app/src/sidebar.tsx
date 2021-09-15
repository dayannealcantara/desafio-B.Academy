import styled, { css } from 'styled-components/macro'

function Sidebar () {
  return (
    <Div>
      <Button>Adicionar arquivo</Button>

      <ul>
        <li>
          <a href=' / '>README.md</a>
          <button>X</button>
          <a href=' / '>CONTRIBUTING.md</a>
          <button>X</button>
          <a href=' / '>LICENSE.md</a>
          <button>X</button>
          <a href=' / '>Links.md</a>
          <button>X</button>
          <a href=' / '>roadmap.md</a>
          <button>X</button>
        </li>
        ))
      </ul>
    </Div>
  )
}

const Div = styled.div`${({ theme }) => css`
  background: ${theme.colors.lightBlack};
  width: 332px;
  height: 1024px;
  left: 0px;
  top: 0px;
`}`

const Button = styled.button`${({ theme }) => css`
  height: 33.88059616088867px;
 width: 268px;
 left: 32px;
 top: 191px;
 border-radius: 3.388059616088867px;
 background: ${theme.colors.primary};

`}`

export { Sidebar }
