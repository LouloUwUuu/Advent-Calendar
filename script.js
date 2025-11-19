document.addEventListener('DOMContentLoaded', () => {
    const doors = document.querySelectorAll('.door');
    
    // Récupérer la date actuelle. Les mois vont de 0 (janvier) à 11 (décembre).
    const today = new Date();
    const currentDay = today.getDate(); // Jour du mois (1-31)
    const currentMonth = today.getMonth(); // Mois (11 = Décembre)
    //const currentDay = 24; // Jour du mois (1-31)
    //const currentMonth = 11; // Mois (11 = Décembre)
    
    // NOUVELLES VARIABLES POUR LA MODALE (Ceci manquait)
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
        } else {
            // Sinon (jour actuel ou passé), on la déverrouille (unlocked)
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

});

