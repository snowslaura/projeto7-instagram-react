export default function CaixaDeStories(){
    return(
        <div class="caixa-de-stories">
                        <div class="primeiro-stories">
                            <div class="stories">
                                <img src="./img/stories/9gag 1.png" alt="9gag 1.png"/>
                            </div>                            
                                <p>9gag</p>
                        </div>
                        <CompilaStories />
                        <div>
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div> 
        </div>
    )
}

const DadosStories =[
    { 
        img: "./img/stories/meowed 1.png",
        alt: "meowed 1.png",
        nome:"meowed"
    },
    { 
        img: "./img/stories/barked 1.png",
        alt: "barked 1.png",
        nome:"barked"
    },
    { 
        img: "./img/stories/nathanwpylestrangeplanet 1.png",
        alt: "nathanwpylestrangeplanet 1.png",
        nome:"nathanwpylestrangeplanet"
    },
    { 
        img: "./img/stories/wawawiwacomicsa 1.png",
        alt: "wawawiwacomicsa 1.png",
        nome:"wawawiwacomicsa",
    },
    { 
        img: "./img/stories/respondeai 1.png",
        alt: "respondeai 1.png",
        nome:"respondeai",
    },
    { 
        img: "./img/stories/filomoderna 1.png",
        alt: "filomoderna 1.png",
        nome:"filomoderna",
    },
    { 
        img: "./img/stories/memeriagourmet 1.png",
        alt: "memeriagourmet 1.png",
        nome:"memeriagourmet",
    },
]

function CompilaStories(){
    return( 
        <>
            {DadosStories.map((dado) =>
            <Stories img={dado.img} alt={dado.alt} nome={dado.nome}/> 
            )
            }
        </>
    )
}

function Stories(props){

    const {
        img,
        alt,
        nome,
    } = props

    return(
        <div>
            <div class="stories">
                <img src={img} alt={alt}/>
            </div>
                <p>{nome}</p>
        </div>
    )
}