import IconesEsquerda from "./IconesEsquerda"
import IconesMeio from "./IconesMeio"
import IconesDireita from "./IconesDireita"
import IconesDireitaMobile from "./IconesDireitaMobile"


export default function Topo(){
    return (
        <div class="top">
            <div class="topo-central">
                <IconesEsquerda />
                <IconesMeio />
                <IconesDireita />
                <IconesDireitaMobile />
            </div> 
        </div>
    )
}



