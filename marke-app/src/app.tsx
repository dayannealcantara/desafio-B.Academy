import { Conteudo } from './conteudo'
import { Sidebar } from './sidebar'

function App () {
  return (
    <>
      <div>
        <Sidebar />
        <Conteudo />
      </div>
    </>
  )
}

/* background: ${({ theme }) => theme.colors.black};;
  color: ${({ theme }) => theme.colors.primary};
*/

export { App }
