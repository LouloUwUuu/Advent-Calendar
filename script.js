document.addEventListener('DOMContentLoaded', () => {
    const doors = document.querySelectorAll('.door');
    // Get the current date. In JavaScript, months are 0-indexed (0=Jan, 11=Dec).
    const today = new Date();
    // We want the day of the month (1-31)
    const currentDay = today.getDate(); 
    // We check that the month is indeed December (month 11)
    const currentMonth = today.getMonth(); 
    
    // --- 1. Initialize the Calendar ---
    doors.forEach(door => {
        const day = parseInt(door.getAttribute('data-day'));
        
        // If it's not December, everything is locked.
        if (currentMonth !== 11) {
            door.classList.add('locked');
            return; // Stops execution for this door
        }
        
        // If the door's day is in the future, we lock it.
        if (day > currentDay) {
            door.classList.add('locked');
        } else {
            // Otherwise (current or past day), it can be opened.
            door.classList.add('unlocked');
            // Check if the door has already been opened (using LocalStorage)
            if (localStorage.getItem('door_' + day) === 'open') {
                door.classList.add('open');
            }
        }

        // --- 2. Handle the Door Click ---
        door.addEventListener('click', () => {
            // If the door is locked, do nothing and alert.
            if (door.classList.contains('locked')) {
                alert("Espera tontita! The two hardest tests on the spiritual road are the patience to wait for the right moment and the courage not to be disappointed with what we encounter.");
                return;
            }

            // If the door is not already open
            if (!door.classList.contains('open')) {
                // Open the door
                door.classList.add('open');
                // Save the door's state in the browser (Local Storage)
                localStorage.setItem('door_' + day, 'open');
            }
        });
    });

});
