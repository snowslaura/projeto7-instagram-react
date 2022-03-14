export default function ColunaDePosts(){
   return (
       <>
        <CompilaPost />
       </>
   
   )
}

const DadosPost =[
    { perfil: ["./img/profile.jpeg" ,"profile.jpeg" ,"lauracmneves"],
      post:["./img/pandora.jpeg","pandora.jpeg"],
      likes: ["./img/stories/respondeai 1.png","respondeai 1.png","respondeai","223"]
    },
    { perfil: ["./img/stories/meowed 1.png" , "meowed 1.png" ,  "meowed"],
    post:["./img/dog 1.png", "dog 1.png"],
    likes: ["./img/stories/adorableanimals 1.png","adorableanimals 1.png", "adorable_animals", "99.159"]
    },
    { perfil: ["./img/profile.jpeg" , "profile.jpeg" ,  "lauracmneves"],
    post:["./img/mimi.jpeg", "mimi.jpeg"],
    likes: ["./img/stories/adorableanimals 1.png","adorableanimals 1.png", "adorable_animals", "189"]
    },
]

function CompilaPost(){
    return(
        <>
            {DadosPost.map((dado) => 
                < Post
                perfil={dado.perfil}
                post={dado.post}
                likes={dado.likes} 
                />
            )
            }
        </>
    )
}

function Post(props){
    const {
        perfil: [imagemPerfil, altPerfil, nomePerfil],
        post: [imagemPost, altPost],
        likes: [imagemLike,altLike, nomeLike, contagem],
    } = props; 

    return(
        <div class="post">
            <div class="perfil-post">
                <div class="profile-e-nome">
                    <img src={imagemPerfil} alt={altPerfil}/>
                    <p>{nomePerfil}</p>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon> 
            </div>
            <img class="imagem-post" src={imagemPost} alt={altPost}/>
            <div class="icones-post">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>   
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div> 
            </div>
            <div class="likes-post">
                <img src={imagemLike} alt={altLike}/>
                <p> Curtido por <strong>{nomeLike}</strong>e <strong>outras {contagem} pessoas</strong></p>
            </div>
        </div>    
    )
}