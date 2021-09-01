import Conteudo from './conteudo'
import Footer from './footer'
import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'




function App () {
    return (
        <>   
        <Header />
        <Menu />
        <div className="container-central">
        <Sidebar/>
        <Conteudo />
        </div>
        <Footer/>
         </>       
    )
}

export default App