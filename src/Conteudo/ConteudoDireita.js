export default function ConteudoDireita(){
    return (
        <div class="conteudo-direita">
            <div class="perfil">
                <div>
                    <img src="./img/profile.jpeg" alt="profile.jpeg"/>
                </div>
                <div>
                    <h1>lauracmneves</h1>
                    <h2>Laura</h2>
                </div>                               
            </div>
            <div class="sugestoes">
                <div class="para-voce">
                    <h2>Sugestões para você</h2>
                </div>
                <div class="ver-tudo">
                    <h1>Ver tudo</h1>
                </div>
            </div>
            <Perfis />
            <div class="sobre">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            </div>
            <div class="versao">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
)
}



const perfilSugestoes = [
    {
    img: "./img/stories/badvibesmemes 1.png",
    alt:"badvibesmemes 1.png",
    nome: "bad.vibes.memes",
    },
    {
    img: "./img/stories/chibirdart 1.png",
    alt:"chibirdart 1.png",
    nome: "chibidart",
    },
    {
    img: "./img/stories/razoesparaacreditar 1.png",
    alt:"razoesparaacreditar 1.png",
    nome: "razoesparaacreditar",
    },
    {
    img: "./img/stories/adorableanimals 1.png",
    alt:"adorableanimals 1.png",
    nome: "adorable_animals",
    },
    {
    img: "./img/stories/smallcutecats 1.png",
    alt:"smallcutecats 1.png",
    nome: "smallcutecats",
    },
]

function Perfis(){
    return (
        <div class="perfis">
           {perfilSugestoes.map ((dado) => 
            <PerfisMenores img={dado.img} alt={dado.alt} nome={dado.nome} /> 
            )}
        </div>
    )
}

function PerfisMenores(props){

    const {
        img,
        alt,
        nome,
      } = props
   
    return(
        <div class="perfis-menores">
        <div class="perfis-esquerda">
            <div>
                <img src={img} alt={alt}/>
            </div>
            <div>
                <h1>{nome}</h1>
                <h2>Segue você</h2>
            </div>
        </div>  
        <div>
            <h1>Seguir</h1>
        </div>                                              
    </div>

    )
}