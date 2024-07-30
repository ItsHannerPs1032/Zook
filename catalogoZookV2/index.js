window.sr = ScrollReveal();

    sr.reveal('.scroll-header',{
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    document.addEventListener("DOMContentLoaded", function() {

        ScrollReveal().reveal('.reveal', {
            origin: 'bottom', 
            distance: '50px', 
            duration: 2000,   
            easing: 'ease-in-out', 
            opacity: 0,  
            reset: true  
        });
    });
    

