var poubelle = document.querySelector('.bin, .poubelle');

if (poubelle) {
    poubelle.addEventListener('click', function() {
    // Conteneur parent
    var container = document.createElement('div');
    container.className = 'dossier-container';
    
    // Image du dossier
    var folder = document.createElement('img');
    folder.src = 'images/corbeille_folder.png';
    folder.alt = 'Dossier';
    folder.className = 'dossier';
    
    // Zone de fermeture X
    var closeZone = document.createElement('div');
    closeZone.className = 'close-zone';
    closeZone.addEventListener('click', function() {
        container.remove();
    });
    
    // Zone de fermeture -
    var closeZone2 = document.createElement('div');
    closeZone2.className = 'close-zone2';
    closeZone2.addEventListener('click', function() {
        container.remove();
    });
    
    // Ajouter au conteneur
    container.appendChild(folder);
    container.appendChild(closeZone);
    container.appendChild(closeZone2);
    
    document.body.appendChild(container);
    });
}