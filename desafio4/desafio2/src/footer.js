import facebook from './imagens/facebook.svg'
import github from './imagens/github.svg'
import instagram from './imagens/instagram.svg'
import linkedin from './imagens/linkedin.svg'


function Footer () {
    return (
        <footer className="footer">
            <nav class="redesSociais">
            <ul class="redesSocais_lista">
                <li class="redesSociais_lista_item">
                    <a href="https://www.instagram.com/dayanneal/">
                        <img src={instagram} alt="instagram" />
                    </a>
                </li>

                <li class="redesSociais_lista_item">
                    <a href="https://github.com/dayannealcantara">
                        <img src={github} alt="github" />
                    </a>
                </li>

                <li class="redesSociais_lista_item">
                    <a href="https://www.linkedin.com/in/dayanne-alcantara-70007519a/">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </li>
            </ul>
        </nav>
            <h4>Desafio bootcamp Brainn.com&emsp;|&emsp; Elaborado por Dayanne Alcantara</h4>
        </footer>
    )
}

export default Footer
