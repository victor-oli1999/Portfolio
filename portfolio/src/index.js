import react from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Sobre from "./Sobre"
import Projetos from "./Projetos"
import Contato from "./Contato"

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Sobre />
            <Projetos />
            <Contato />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))