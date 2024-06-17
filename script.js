/* NAV-BAR */

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');

        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen 
            ? 'fa-solid fa-xmark' 
            : 'fa-solid fa-bars';
    };
});

/* SIDE-BAR */

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const email = document.querySelector('p#email');
    const leftLine = document.querySelector('.vertical-line');
    const rightLine = document.querySelector('.vertical-line-2');

    // Function to hide elements
    function hideElements() {
        sidebar.style.display = 'none';
        email.style.display = 'none';
        leftLine.style.display = 'none';
        rightLine.style.display = 'none';
    }

    // Function to show elements
    function showElements() {
        sidebar.style.display = '';
        email.style.display = '';
        leftLine.style.display = '';
        rightLine.style.display = '';
    }

    // Initial check on the first run
    if (window.innerWidth < 900) {
        hideElements();
    } 

    // Add an event listener for window resize to handle resizing
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            showElements();
        }
    });
});


