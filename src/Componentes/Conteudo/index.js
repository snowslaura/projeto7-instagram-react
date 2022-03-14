import ConteudoEsquerda from "./ConteudoEsquerda"
import ConteudoDireita from "./ConteudoDireita"

export default function Conteudo(){
    return(
        <div class="conteudo-da-pagina">
            <div class="centro-da-pagina">
                <ConteudoEsquerda />
                <ConteudoDireita />
            </div>        
        </div>
    )
}



