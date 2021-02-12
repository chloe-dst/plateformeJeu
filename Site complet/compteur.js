// variable qui servira à incrémenter
var compteur = document.querySelector("div#compteur");

// variable qui servira à effacer le tout
var effacer = document.querySelector("div#effacer");

// varibles désignat les div avec les chiffres
var chiffre1 = document.querySelector("div#chiffre1");
var chiffre2 = document.querySelector("div#chiffre2");
var chiffre3 = document.querySelector("div#chiffre3");
var chiffre4 = document.querySelector("div#chiffre4");


// Je met les compteur à 0
var numb1 = 0 ;
var numb2 = 0 ;
var numb3 = 0 ;
var numb4 = 0 ;

chiffre1.innerHTML = numb1;
chiffre2.innerHTML = numb2;
chiffre3.innerHTML = numb3;
chiffre4.innerHTML = numb4;
    



compteur.addEventListener("click", () => {

    numb4 += 1
    chiffre4.innerHTML = numb4

    if (numb4 == 10) {

    numb4 = 0
    chiffre4.innerHTML = numb4

    numb3 +=1
    chiffre3.innerHTML = numb3
    }

    if( numb3 == 10 ) {

        numb3 = 0
        chiffre3.innerHTML = numb3

        numb2 +=1
        chiffre2.innerHTML = numb2
    }

    if( numb2 == 10) {

        numb2 = 0
        chiffre2.innerHTML = numb2;

        numb1 +=1
        chiffre1.innerHTML = numb1
    }
  
})


effacer.addEventListener("click", () => {

var numb1 = 0 ;
var numb2 = 0 ;
var numb3 = 0 ;
var numb4 = 0 ;

chiffre1.innerHTML = numb1;
chiffre2.innerHTML = numb2;
chiffre3.innerHTML = numb3;
chiffre4.innerHTML = numb4;

})
