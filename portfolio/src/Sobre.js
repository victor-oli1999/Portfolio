import react from "react"
import Skills from "./Skills"

export default function Sobre() {
    return (
        <article className="component">
            <div className="sobre">
                <h3>SOBRE</h3>
                <p>Sou um desenvolvedor frontend estudando React, estou a procura de
                    uma oportunidade de emprego que me possibilite desafios e a 
                    levar as minhas habilidades ao próximo nivel.</p>
            </div>
            <div className="interesses">
                <h3>INTERESSES</h3>
                <p>Pretendo aprender Vue, Node, Express e MongoDB em um futuro
                    bem próximo.</p>
            </div>
            <div className="habilidades">
                <h3>HABILIDADES</h3>
                <Skills />
            </div>
        </article>
    )
} 