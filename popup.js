const iframe = document.querySelector(".popup-iframe");

document.querySelectorAll(".open-popup").forEach(function(button) {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const src = button.dataset.src;
        if (src) {
            iframe.style.opacity = "0";
            iframe.src = ""; // vider l'iframe pour éviter l'effet flash
            setTimeout(function() {
                iframe.src = src;
            }, 50);
            iframe.onload = function() {
                iframe.style.opacity = "1";
            };
        }
        document.getElementById("popup-overlay").classList.add("open");
    });
});

document.getElementById("popup-close").addEventListener("click", function() {
    document.getElementById("popup-overlay").classList.remove("open");
});

// // Clique hors fenêtre pour fermer
// document.getElementById("popup-overlay").addEventListener("click", function(e) {
//     if (e.target === this) {
//         this.classList.remove("open");
//     }
// });