import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faCss3Alt, faJsSquare, faWordpress, faReact, faPython, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Skills() {
    return (
        <article className="component">
            <div className="skills">
                <ul>
                    <li><FontAwesomeIcon icon={faHtml5} className="iconSkill" />HTML</li>
                    <li><FontAwesomeIcon icon={faCss3Alt} className="iconSkill" />CSS</li>
                    <li><FontAwesomeIcon icon={faJsSquare} className="iconSkill" />JavaScript</li>
                    <li><FontAwesomeIcon icon={faReact} className="iconSkill" />React</li>
                    <li><FontAwesomeIcon icon={faDatabase} className="iconSkill" />MySQL</li>
                    <li><FontAwesomeIcon icon={faPython} className="iconSkill" />Python</li>
                </ul>
            </div>
            <div className="skills">
                <ul>
                    <li><FontAwesomeIcon icon={faGithub} className="iconSkill" />Github</li>
                    <li><FontAwesomeIcon icon={faWordpress} className="iconSkill" />Wordpress</li>
                </ul>
            </div>
        </article>
    )
} 