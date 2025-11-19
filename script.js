    document.addEventListener('DOMContentLoaded', () => {
    const doors = document.querySelectorAll('.door');
       
    // Récupérer la date actuelle. Les mois vont de 0 (janvier) à 11 (décembre).
    const today = new Date();
    //const currentDay = today.getDate(); // Jour du mois (1-31)
    //const currentMonth = today.getMonth(); // Mois (11 = Décembre)
    const currentDay = 16; // Jour du mois (1-31)
    const currentMonth = 11; // Mois (11 = Décembre)
    
    // NOUVELLES VARIABLES POUR LA MODALE 
    const modal = document.getElementById('modal-lock');
    const closeBtn = document.querySelector('.close-button');
    const lockMessage = document.getElementById('lock-message');

    // Fonction pour fermer la modale
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Fermeture par le bouton X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Fermeture en cliquant n'importe où en dehors de la modale
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- 1. Initialiser le Calendrier ---
    doors.forEach(door => {
        const day = parseInt(door.getAttribute('data-day'));
        
        // Si le jour de la porte est dans le futur, on la bloque.
        if (day > currentDay || currentMonth !== 11) {
            door.classList.add('locked');
        }
        // Sinon (jour passé), on l'ouvre
        if (day < currentDay) {
            door.classList.add('open');
        }

        if (day == currentDay) {
            door.classList.add('unlocked');
        }
        // --- 2. Gérer le Clic sur la Porte ---
        door.addEventListener('click', () => {
            
            // SI LA PORTE EST BLOQUÉE (MODIFICATION ICI : on affiche la modale)
            if (door.classList.contains('locked')) {

                // Afficher la modale (au lieu de l'alerte)
                modal.style.display = 'block';

                return; 
            }

            // Si la porte n'est pas déjà ouverte
            if (!door.classList.contains('open')) {
                // Ouvre la porte
                door.classList.add('open');
                // Enregistre l'état de la porte
            }
        });
    });

    // --- Génération des Flocons de Neige (pour le fond animé) ---
    const snowContainer = document.querySelector('.snow-container');
    const numberOfSnowflakes = 50; // Nombre de flocons simultanés

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const flake = document.createElement('div');
        flake.classList.add('snow-flake');
    
        // Position aléatoire sur la largeur de l'écran
        flake.style.left = Math.random() * 100 + 'vw';
    
        // Taille aléatoire
        const size = Math.random() * 3 + 2; // Entre 2px et 5px
        flake.style.width = size + 'px';
        flake.style.height = size + 'px';
    
        // Durée d'animation aléatoire (pour un effet moins répétitif)
        flake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Entre 5s et 10s
    
        // Délai de démarrage aléatoire (pour que les flocons ne commencent pas tous en même temps)
        flake.style.animationDelay = Math.random() * 5 + 's';
    
        snowContainer.appendChild(flake);
    }

});
