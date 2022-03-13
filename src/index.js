import ReactDom from "react-dom"
import Topo from "./Topo"
import BarraMobile from "./BarraMobile"
import Conteudo from "./Conteudo/Conteudo"

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
