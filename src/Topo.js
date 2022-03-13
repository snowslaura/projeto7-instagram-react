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
function IconesEsquerda(){
    return (
        <div class="icones-esquerda">
            <div class="logo-instagram">
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div class="instagram">
                <img src="./img/logo.png" alt="logo.png"/>    
            </div>
        </div>
    )
}
function IconesMeio(){
    return (
        <div class="icones-meio">
            <div class="barra-pesquisar">
                <p>Pesquisar</p>
            </div>
            <div class="instagram-mobile">
                <img src="./img/logo.png" alt="logo.png"/>    
            </div>  
        </div> 
    )
}
function IconesDireita(){
    return (
        <div class="icones-direita">
            <ion-icon class="plane" name="paper-plane-outline"></ion-icon>
            <ion-icon class="compass" name="compass-outline"></ion-icon>
            <ion-icon class=" heart" name="heart-outline"></ion-icon>
            <ion-icon class="person" name="person-outline"></ion-icon>
        </div>
    )
}
function IconesDireitaMobile (){
    return (
        <div class="icones-direita-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>                
        </div> 
    )
}