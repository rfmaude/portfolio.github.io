// ----------------------------------------------POPUP-----------------------------------------
const iframe = document.querySelector(".popup-iframe");
let fenetreOuverte = null;
function openPopup(src) {
    if (src) {
        const isExternalLink = src.startsWith("http://") || src.startsWith("https://");
        const isGameLink = src === "https://rfmaude.github.io/jeu.github.io/";

        if (isExternalLink && !isGameLink) {
            window.open(src, "_blank", "noopener,noreferrer");
            return;
        }

        iframe.onload = function () {
            iframe.style.opacity = "1";
        };
        iframe.style.opacity = "0";
        iframe.src = "";
        setTimeout(function () {
            iframe.src = src;
        }, 50);
        fenetreOuverte = src;
    }
    document.getElementById("popup-overlay").classList.add("open");
}

document.querySelectorAll(".open-popup").forEach(function (button) {
    button.addEventListener("click", function () {
        openPopup(button.dataset.src);
    });
});



// ----------------------------------------------RESEARCH-----------------------------------------
//----------------------------------------A LAISSER??  ↓↓↓↓↓↓↓↓
const sectResearch = document.querySelector('.research');
let button = document.querySelectorAll('.favoris');
let btnPresent = [`images/icons/moi.png`]
let btnClique = null;
let src = null;
let img = null;

// AJOUTER UN BTN
function attachListener(btn) { //CREATION DU BTN
    btn.addEventListener(`click`, function (event) {
        btnClique = this;
        // console.log(`le btn est ${btnClique}`);
        src = btnClique.dataset.src;

        img = btnClique.querySelector(`.icon`).getAttribute(`src`);
        // console.log(`la source est ${src}`)
        // console.log(`L'image ${img}`)
        if (!btnPresent.includes(src)) {
            add(btnClique, src, img)
            btnPresent.push(src);
            console.log(`Le tb present quand on ajoute : ${btnPresent}`);
        }

        openPopup(src);

    });
}

function add(btn, src, img) {
    const newbtn = document.createElement(`button`);
    sectResearch.appendChild(newbtn);
    newbtn.classList.add(`open-popup`);
    newbtn.classList.add(`favoris`);
    newbtn.classList.add(`barre`);

    let imgElement = document.createElement(`img`);
    imgElement.classList.add(`icon`);
    imgElement.src = img;  // img reste le paramètre (le chemin)
    newbtn.setAttribute(`data-src`, src);
    newbtn.appendChild(imgElement);
    attachListener(newbtn) // JE LE GARDE???


}

// Permet l'ajout sur la barre
for (let i = 0; i < button.length; i++) {
    let btnSelect = button[i];
    attachListener(btnSelect);
}

// ----------------------------------SUPPRIMER UN BTN + FERMER FENETRE---------------------------
const close = document.querySelector(".popup-close");
const reduce = document.querySelector(".popup-reduce");

close.addEventListener("click", function () {
    const btnBarre = document.querySelector(`.barre[data-src='${src}']`);
    if (btnBarre && src) {
        btnBarre.remove();
        const index = btnPresent.indexOf(src);
        
        btnPresent.splice(index, 1);
                    console.log(`Le tb present quand on retire : ${btnPresent}`);

        
    }
    document.getElementById("popup-overlay").classList.remove("open");
    fenetreOuverte = null;
});


reduce.addEventListener("click", function () {
    document.getElementById("popup-overlay").classList.remove("open");
    // fenetreOuverte = null;
});








