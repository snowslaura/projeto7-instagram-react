import PerfilAtual from "./PerfilAtual"
import Perfis from "./Perfis"
import SobreVersao from "./SobreVersao"

export default function ConteudoDireita(){
    return (
        <div class="conteudo-direita">
            <PerfilAtual {...dadosPerfil} />
            <Perfis />
            <SobreVersao />
        </div>
)
}
const dadosPerfil={
    imagemPerfil: "./img/profile.jpeg",
    altPerfil:"profile.jpeg",
    login:"lauracmneves",
    nome: "Laura",
}





