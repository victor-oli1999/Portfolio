import react from "react"
import portfolio from "./imagens/portfolio.png"

export default function Projetos() {
    return (
        <article className="component">
            <div className="projeto">
                <div className="img">
                    <div className="site-topo">
                        <div className="circulo-vermelho"></div>
                        <div className="circulo-amarelo"></div>
                        <div className="circulo-verde"></div>
                    </div>
                    <img src={portfolio} />
                </div>
                <div className="conteudo">
                    <h4>Portfolio</h4>
                    <p>Desenvolvido para que eu pudesse ter onde me apresentar,
                        demonstrar os meus projetos e as habilidades que 
                        possuo.
                    </p>
                    <p>Foi montado utilizando React, HTML e CSS.</p>
                    <div className="links">
                        <a href="" target="_blank">Website</a>
                        <a href="https://github.com/victor-oli1999/Portfolio" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
            <div className="projeto">
                <div className="img"></div>
                <div className="conteudo">
                    <h4>AirBnb Experience Clone</h4>
                    <p> Desenvolvido enquanto estudava React, consegui
                        aprofundar meus conhecimentos e aprender sobre
                        componentes.
                    </p>
                    <p>Foi montado utilizando React, HTML e CSS.</p>
                    <div className="links">
                        <a>Website</a>
                        <a>GitHub</a>
                    </div>
                </div>
            </div>
        </article>
    )
} 