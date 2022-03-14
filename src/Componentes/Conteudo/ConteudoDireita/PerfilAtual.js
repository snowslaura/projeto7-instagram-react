export default function PerfilAtual(props){
    
    return(
        <>
        <div class="perfil">
            <div>
                <img src={props.imagemPerfil} alt={props.altPerfil}/>
            </div>
            <div>
                <h1>{props.login}</h1>
                <h2>{props.nome}</h2>
            </div>                               
        </div>
        <div class="sugestoes">
            <div class="para-voce">
                <h2>Sugestões para você</h2>
            </div>
            <div class="ver-tudo">
                <h1>ver tudo</h1>
            </div>
        </div>
        </>
 )
}
