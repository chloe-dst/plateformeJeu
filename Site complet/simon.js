//Lien vers la page de début
const divLancement = document.querySelector("div#start");

// Lien vers mon titre simon blanc
const samllTitle = document.querySelector("#smallTitle");

//Liens vers mes quatres boutons
const toucheRose = document.getElementById("color1");
const toucheBleu = document.getElementById("color2");
const toucheJaune = document.getElementById("color3");
const toucheViolet = document.getElementById("color4");

//Lien vers mon bouton permettant de commencer la partie
const boutonDeLancement = document.getElementById("boutonDebut");

// Lien vers mon bouton me permettant de recommencer à zéro
const boutonDeNouvellePartie = document.getElementById("boutonRecommencer");

// Liste de l'odre de passage de mes bouttons et celle du joueur
var ordreDePassage = [];
var ordreDePassageJoueur = [];

// Le niveau du joueur 
var niveau = 0;

//Nombre de de fois qu'une touche dispapraît
var apparitionDeTouches = 0;

// Variable pour savoir qui dois jouer
// true dans les débuts car c'est Simon qui commence à jouer
var leTourDeSimon = true;

// Variables reliées au messages si nous passons un niveau ou ratons
var bon = document.querySelector("p.bravo");
var mauvais = document.querySelector("p.dommage")

// Toutes les bandes son du jeu
var sonToucheRose = new Audio('son/touchenoir.mp3');
var sonToucheBleu = new Audio('son/touchebleu.mp3');
var sonToucheJaune = new Audio('son/touchejaune.mp3');
var sonToucheViolet = new Audio('son/toucheviolet.mp3');
var sonDebutJeu = new Audio('son/Wontolla-LaserPointer.mp3');
var good = new Audio('son/Yoohoo.mp3')
var rate = new Audio('son/wrong long grave.mp3')


// Function qui sert à netoyer toute les variables, listes et boléens du jeu
function nettoyage() {
    ordreDePassageJoueur = [];
    ordreDePassage = [];
    niveau = 0;
    apparitionDeTouches = 0;
    leTourDeSimon = true
}


// Pour faire disparaître la div transparente au avec un clique dessus
divLancement.addEventListener("click",() => {
    if (divLancement.style.display != "none") {
        divLancement.style.display = "none";
        samllTitle.style.opacity = 1;
        sonDebutJeu.play()
    }
}, {once : true})



// Au clic sur ce bouton la première partie commence et le bouton recommencer apparaît
boutonDeLancement.addEventListener("click", () => {
    boutonDeLancement.style.display = "none" ;
    boutonDeNouvellePartie.style.display = "block";
    // J'arrête la musique
    sonDebutJeu.pause();
    // Je nettoie le jeu (we never know)
    nettoyage()
    // Je lance le premier niveau
    setTimeout(compositionDelaMusique, 500);
    
})


// Au clic sur le bouton recommencer, je recommence une nouvelle partie à zéro
boutonDeNouvellePartie.addEventListener("click", () => {
    // Je relance une nouvelle partie, mais je n'ettoie avant pour repartir de 0
    nettoyage()
    setTimeout(compositionDelaMusique(),1500)
})



function compositionDelaMusique() {
    // ici j'ai juste besoin de netoyer le liste des touches sélectionné par le joueur pour la prochaine série
    ordreDePassageJoueur = []
    // Le niveau augmente à chaque fois qu'une nouvelle couleur viens s'ajouter à notre tableau
    jugeDeNiveau()
    //Un chiffre qui correspond à une des touches est crée (entre 1 et 4)
    var valeurDeLaCouleurAleatoire = Math.floor(Math.random() * (5 - 1)) + 1;
    ordreDePassage.push(valeurDeLaCouleurAleatoire);
    
    //La compositation aléatoire des touches et son activation
    musique(ordreDePassage);
    
}



function jugeDeNiveau() {
    // remettre le compteur de fois qu'une touche a disparut à 0 pour le prochain niveau
    apparitionDeTouches = 0
    // On passe au niveau supérieur, avec une couleur en plus
    niveau++
    // Le joueur peut voir à qu'elle niveau il se trouve en directe
    var niveauJoueur = document.querySelector("#level");
    niveauJoueur.innerHTML = niveau
   
}



// Cette fonction ajoute un effet sur chaque touche apelé par la liste ordreDePassage
//Cquage animations se déroule l'une après l'autre grâce à setTimeout
function musique (ordreDePassage) {
console.log("NIVEAU : ", niveau)
leTourDeSimon = true
    ordreDePassage.forEach((valeurDeLaCouleur, i) => {
        
      console.log("Le tour de Simon = ",leTourDeSimon)
        setTimeout(() => {
            if (valeurDeLaCouleur == 1) {
                toucheRose.style.opacity = 0;
                sonToucheRose.play();
                setTimeout("toucheRose.style.opacity = 1",400);
                console.log("rose : sa valeur = "+ordreDePassage[i]+" sa place = " +i)
                   
            }
            else if (valeurDeLaCouleur == 2) {
                toucheBleu.style.opacity = 0;
                sonToucheBleu.play();
                setTimeout("toucheBleu.style.opacity = 1",400);
                console.log("bleu : sa valeur = "+ordreDePassage[i]+" sa place = " +i)
                
            }
            else if (valeurDeLaCouleur == 3) {
                toucheJaune.style.opacity = 0;
                sonToucheJaune.play()
                setTimeout("toucheJaune.style.opacity = 1",400)
                console.log("jaune : sa valeur = "+ordreDePassage[i]+" sa place = " +i)
                
            }
            else {
                toucheViolet.style.opacity = 0;
                sonToucheViolet.play()
                setTimeout("toucheViolet.style.opacity = 1",400)
                console.log("violet : sa valeur = "+ordreDePassage[i]+" sa place = " +i)
                
            }
            // +1 a chaque fois q'une case disparaît
            apparitionDeTouches++

            //Si le nombre de répétitions est égal au niveau :
            // Le tour de Simon est terminée, c'est maintenant au joueur de jouer
            if (apparitionDeTouches == niveau   ) {
                leTourDeSimon = false;

                if (leTourDeSimon == false) {
                 toucheRose.onclick = () => {
                     ordreDePassageJoueur.push(1)
                     comparaison(ordreDePassageJoueur)
                     sonToucheRose.play()
                     toucheRose.classList.add('lightr')
                     setTimeout("toucheRose.classList.remove('lightr')",300)
                 }
                 toucheViolet.onclick = () => {
                     ordreDePassageJoueur.push(4)
                     comparaison(ordreDePassageJoueur)
                     sonToucheViolet.play()
                     toucheViolet.classList.add('lightv')
                     setTimeout("toucheViolet.classList.remove('lightv')",300)
                 }
                 toucheBleu.onclick = () => {
                     ordreDePassageJoueur.push(2)
                     toucheBleu.classList.add('lightb')
                     setTimeout("toucheBleu.classList.remove('lightb')",300)
                     comparaison(ordreDePassageJoueur)
                     sonToucheBleu.play()
                 }
                 toucheJaune.onclick = () => {
                     ordreDePassageJoueur.push(3)
                     comparaison(ordreDePassageJoueur)
                     sonToucheJaune.play()
                     toucheJaune.classList.add('lightj')
                     setTimeout("toucheJaune.classList.remove('lightj')",300)
                 } }  

                console.log("le tableau de simon",ordreDePassage)
                console.log("Au tour su joueur donc leTourDeSimon = ",leTourDeSimon)
                console.log("C'est au tour du JOUEUR")
            }     
        }, i * 1000);
    });
}

// Une fonction qui compare les deux listes et nous renvoie si nous nous sommes trompé ou pas
// Si on se trompe le jeu rejoue la mélodie
// Sinon si nous avons bon nous passons au niveau suivant

function comparaison(ordreDePassageJoueur) {
    ordreDePassageJoueur.forEach((laToucheDeCouleurDeSimon,placeDeLaCouleur) => {
        if(ordreDePassage[placeDeLaCouleur] == ordreDePassageJoueur[placeDeLaCouleur]) {

        }
        else  {
            rate.play();
            //Une message est envoyé quand nous ratons
            mauvais.style.display = "block";
            setTimeout('mauvais.style.display = "none"',600);
            // Nous nettoyons puis nous relançons une nouvelle partie
            setTimeout(nettoyage,500);
            setTimeout(compositionDelaMusique,1500);
        }
    })
if (ordreDePassage.length == ordreDePassageJoueur.length) {
    good.play();
    // On reprend la mélodie avec une valeurs de plus
    setTimeout(compositionDelaMusique,2000);
    // Un message est envoyé quand nous réuississons à passer le niveau
    bon.style.display = "block";
    setTimeout('bon.style.display = "none"',600);
    
}

}


