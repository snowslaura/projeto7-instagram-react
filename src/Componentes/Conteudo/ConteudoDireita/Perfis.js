export default function Perfis(){
    return (
        <div class="perfis">
           {perfilSugestoes.map ((dado) => 
            <PerfisMenores img={dado.img} alt={dado.alt} nome={dado.nome} /> 
            )}
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