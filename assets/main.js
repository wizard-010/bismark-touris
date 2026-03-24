// assets/main.js
// Hamburger Menu Toggle for Small Screens Only

document.addEventListener('DOMContentLoaded', function() {
    // ========== PROTECTION: Disable Right-Click ==========
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, false);
    
    // ========== PROTECTION: Disable Keyboard Shortcuts ==========
    document.addEventListener('keydown', function(e) {
        // Disable F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }
    });
    
    // ========== HAMBURGER MENU FUNCTIONALITY ==========
    const hamburgerBtn = document.getElementById('hamburgerToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('show');
                    const icon = hamburgerBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // ========== VISITOR COUNTER FUNCTIONALITY (FlagCounter) ==========
    const visitorCountElement = document.getElementById('visitorCountHeader');
    
    if (visitorCountElement) {
        // Check if FlagCounter code already exists
        const existingCounter = visitorCountElement.querySelector('a');
        
        if (!existingCounter) {
            // Create FlagCounter link and image using your provided code
            const counterLink = document.createElement('a');
            counterLink.href = 'http://s01.flagcounter.com/more/5i9Z';
            counterLink.target = '_blank';
            counterLink.rel = 'noopener noreferrer';
            
            const counterImg = document.createElement('img');
            counterImg.src = 'https://s01.flagcounter.com/count2/5i9Z/bg_000000/txt_F7FF19/border_4A23CC/columns_8/maxflags_12/viewers_Who+Viewed+Our+Website+by+Country/labels_1/pageviews_1/flags_0/percent_0/';
            counterImg.alt = 'Flag Counter';
            counterImg.border = '0';
            
            counterLink.appendChild(counterImg);
            
            // Clear the element and add the counter
            visitorCountElement.innerHTML = '';
            visitorCountElement.appendChild(counterLink);
        }
    }
    
    // ... (rest of your existing code for images, gallery, carousel, etc.)
    // Keep all your existing image mapping and carousel code below
});
