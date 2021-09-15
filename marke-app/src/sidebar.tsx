import styled, { css } from 'styled-components/macro'

function Sidebar () {
  return (
    <Div>
      <Button>Adicionar arquivo</Button>

      <Div>
        <li>
          <A href='/'>README.md</A>
          <button>X</button>
        </li>
        <li>
          <A href=' / '>CONTRIBUTING.md</A>
          <button>X</button>
        </li>
        <li>
          <A href=' / '>LICENSE.md</A>
          <button>X</button>
        </li>
        <li>
          <A href=' / '>Links.md</A>
          <button>X</button>
        </li>
        <li>
          <A href=' / '>roadmap.md</A>
          <button>X</button>
        </li>
      </Div>
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

const A = styled.a`
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.02em;
text-align: left;

width: 88px;
height: 21px;
left: 78px;
top: 258.88px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
letter-spacing: -0.02em;
color: rgba(255, 255, 255, 0.65);
text-decoration: none;
`

export { Sidebar }
