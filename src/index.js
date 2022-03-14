import ReactDom from "react-dom"
import Topo from "./Componentes/Topo"
import BarraMobile from "./Componentes/BarraMobile"
import Conteudo from "./Componentes/Conteudo"

function App(){
    return(
        <>
            < Topo />
            < BarraMobile />
            < Conteudo />
        </>
    )
}

const conteudo = document.querySelector(".root")
ReactDom.render(App(), conteudo)
