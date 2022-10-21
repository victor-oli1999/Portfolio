import react from "react"

export default function Projetos() {
    return (
        <article className="component">
            <div className="projeto">
                <div className="img"></div>
                <div className="conteudo">
                    <h4>Portfolio</h4>
                    <p>Desenvolvido para que eu pudesse ter onde me apresentar,
                        demonstrar os meus projetos e as habilidades que 
                        possuo.
                    </p>
                    <p>Foi montado utilizando React, HTML e CSS.</p>
                    <div className="links">
                        <p>Website</p>
                        <p>GitHub</p>
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
                        <p>Website</p>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </article>
    )
} 