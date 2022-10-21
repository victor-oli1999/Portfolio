import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Contato() {
    return (
        <article className="component">
            <div className="contato">
                <h3>CONTATO</h3>
                <div className="esquerda">
                    <p>Estou aberto a novas oportunidades. Você pode
                        entrar em contato comigo através dos seguintes meios:
                    </p>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} className="iconContato" /><a href="mailto:victor.oli1999@gmail.com">victor.oli1999@gmail.com</a></li>
                        <li><FontAwesomeIcon icon={faLinkedin} className="iconContato" /><a href="https://www.linkedin.com/in/victoroli1999/" target="_blank">Victor Oliveira</a></li>
                        <li><FontAwesomeIcon icon={faGithub} className="iconContato" /><a href="https://github.com/victor-oli1999" target="_blank">victor-oli1999</a></li>
                    </ul>
                </div>
                <div className="direita"></div>
            </div>
        </article>
    )
} 