// MENU
let btnMenu = document.querySelector(".deroulant"); 
let volet = document.querySelector(".sous");       

btnMenu.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le lien de recharger la page
    volet.style.display = "block";
});

// Fermer le menu si on clique sur le fond noir (main)
document.querySelector("main").addEventListener("click", function() {
    volet.style.display = "none";
});

// PHOTO
let blockdroite = document.querySelector(".droite")
let blockgauche = document.querySelector(".gauche")
let blockimg = document.querySelector(".image img")


let images = [
    "images/galleries/noir_blanc/n-b_1.jpeg",
    "images/galleries/noir_blanc/n-b_2.jpeg",
    "images/galleries/noir_blanc/n-b_3.jpeg",
    "images/galleries/noir_blanc/n-b_4.jpeg",
    "images/galleries/noir_blanc/n-b_5.jpeg",
    "images/galleries/noir_blanc/n-b_6.jpeg",
    "images/galleries/noir_blanc/n-b_7.jpeg",
    "images/galleries/noir_blanc/n-b_8.jpeg"
];
let i = 0;

function add() {
    i++
    if (i < images.length) {
        blockimg.src = images[i]
        console.log("add" + i)
    }
    else {
        i = 0
        blockimg.src = images[i]
        console.log("add" + i)
    }
    
}

function moins() {
    if (i < 0) {
        i = images.length - 1
    }
    if (i < images.length) {
        blockimg.src = images[i]
        console.log("moins" + i)
    }
    else {
        i = 0
        blockimg.src = images[i]
        console.log("moins" + i)
    }
        i--

    
}
blockdroite.addEventListener("click", add);
blockgauche.addEventListener("click", moins);