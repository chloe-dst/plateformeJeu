//Lien vers la page de début
const divLancement = document.querySelector("div#start");

// Je sélectionne la boîte de jeu
var jeu = document.querySelector("div#HOP")

// Je sélectionne mon perso
var perso = document.querySelector("div#perso")

// Je sélectionne mon obstacle
var obstacle1 = document.querySelector("div#obstacle1")

// Les audios
var chansonDuJeu = new Audio('son/Total Reboot - Level 4 (Lose).mp3')
var beep = new Audio('son/beep.wav')

// Je crée un score 
var score = 0
var afficheScore = document.querySelector("div#score")

// Bouton pour recommencer la partie
var bouttonZero = document.querySelector("button")



// Pour faire disparaître la div transparente au avec un clique dessus
divLancement.addEventListener("click",() => {
    if (divLancement.style.display != "none") {
        divLancement.style.display = "none";
        chansonDuJeu.play()
        maybe()
        var debutRun = obstacle1.classList.add('attaqueYellow')
        // On attends avant de lancer l'animation
        setTimeout(debutRun,1500)

    }
}, {once : true})



// Je créer un eventListener afin que mon perso puisse sauté au dessus de l'obstacle
jeu.addEventListener("click", () => {
    beep.play()
    perso.classList.add("hophop")
    // Je rajoute 1 au score à chaque fois que le perso saute au dessus de l'obstacle
    score += 1
    afficheScore.innerHTML = score;
    setTimeout('perso.classList.remove("hophop")',401)
})



function maybe() {
    // Je créer une intervalle pour compter en "temps réel" la posititon de mon perso et de mon obstacle
var toucherCoulerouler = setInterval(() => {

    // Je demande ici que l'on me donne les coordonnées de mes objets
    var dataDuPerso = perso.getBoundingClientRect()
    var dataDeObstacle1 = obstacle1.getBoundingClientRect()

    // Je calcule ici si il y a collision de mon perso et de son obstacle
    if(dataDeObstacle1.x <= dataDuPerso.x + dataDuPerso.width && dataDeObstacle1.x + dataDeObstacle1.width >= dataDuPerso.x &&  dataDuPerso.y + dataDuPerso.height >=  dataDeObstacle1.y) {
            // Si mon personnage et mon obstacle se touche le jeux s'arrête
            clearInterval(toucherCoulerouler)
            bouttonZero.style.display = "block";
            obstacle1.style.display = "none";
            perso.style.display = "none";
            chansonDuJeu.pause()

        }
        else {
            console.log("coco")
        }
}, 300);
}


bouttonZero.addEventListener("click", () => {
    chansonDuJeu.play()
    // Je fait disparaître le bouton
    bouttonZero.style.display = "none";
    // Je remets le score à 0
    score = 0;
    afficheScore.innerHTML = score;
    // Je raffiche mes deux block
    perso.style.display = "block";
    setTimeout('obstacle1.style.display = "block"', 1000)
    setTimeout(maybe,1000)
    
})


/*
function boum(hero,enemie) {

    var hero = {x:321, y:762, width:74, height:129}
    var enemie = {radius:30, x:1145, y:831}

    var distX = Math.abs(enemie.x - hero.x - hero.width / 2)
    var distY = Math.abs(enemie.y - hero.y - hero.height / 2)

    if (distX > (hero.width / 2 + enemie.radius) || distY > (hero.height / 2 + enemie.radius)) {
        console.log("touché")
    }
    if (distX <= (hero.width / 2) || distY <= (hero.width / 2)) {
        console.log(" continue")
    }
}
/*
//Je créer une fonction qui détecte si mes deux objets se touchent
function toucherCouler() {
    if (perso.x + perso.width >= obstacle1.x &&
        perso.x <= obstacle1.x + obstacle1.width &&
        perso.y + perso.height >= obstacle1.y &&
        perso.y <= obstacle1.y + obstacle1.height) {
            console.log("touché")

        }
}
toucherCouler()
setInterval(toucherCouler,500)

/*https://openclassrooms.com/forum/sujet/detecter-que-des-elements-html-se-touchent-16183
 __________________PREMIER ESSAIE SANS GRAND SUCCES ________________________________
// Je récupère tout les données de mon obstacle et de mon objet
//PERSO
var dosDuPerso = parseInt(window.getComputedStyle(perso).getPropertyValue("left")) // 120
var ventreDuPerso = parseInt(window.getComputedStyle(perso).getPropertyValue("right")) // 656
var piedDuPerso = parseInt(window.getComputedStyle(perso).getPropertyValue("bottom")) // 121
//OBSTACLES
var devantObstacle = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left")) // 121


// Je créer une "boucle" qui calcul la localisation du bas de mon perso
 var localisationDuPiedDuPerso = setInterval(piedDuPerso, 300)
 var localisationDuDevantDeObstacle = setInterval(devantObstacle,300)

// Je crée les conditions : perdu  / continue ...

if (localisationDuPiedDuPerso < 165 && localisationDuDevantDeObstacle <= 165 ){
   console.log('nulle')
}
*/
