window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    const body = document.querySelector('body');
    const windowHeight = window.innerHeight;
    const footerMargin = 0.3; // Ajustez cette valeur pour définir la marge du footer par rapport à la hauteur de la fenêtre
    
    if (window.scrollY > 0) {
    header.classList.add('scrolled');
    nav.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    nav.classList.remove('scrolled');
    }
    
    // On vérifie si l'utilisateur est en bas de la page en comparant la hauteur totale de la page au scrollY et à la hauteur de la fenêtre avec la marge ajoutée
    if (window.scrollY + windowHeight >= document.body.scrollHeight - (windowHeight * footerMargin)) {
    // Lorsque l'utilisateur est en bas de la page, on retire la classe 'scrolled' du footer
    footer.classList.remove('scrolled');
    } else {
    // Lorsque l'utilisateur n'est pas en bas de la page, on ajoute la classe 'scrolled' au footer
    footer.classList.add('scrolled');
    }
    
    });
    window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    const body = document.querySelector('body');
    const windowHeight = window.innerHeight;
    const footerMargin = 0.3; // Ajustez cette valeur pour définir la marge du footer par rapport à la hauteur de la fenêtre
    
    if (window.scrollY > 0) {
    header.classList.add('scrolled');
    nav.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    nav.classList.remove('scrolled');
    }
    
    // On vérifie si l'utilisateur est en bas de la page en comparant la hauteur totale de la page au scrollY et à la hauteur de la fenêtre avec la marge ajoutée
    if (window.scrollY + windowHeight >= document.body.scrollHeight - (windowHeight * footerMargin)) {
    // Lorsque l'utilisateur est en bas de la page, on retire la classe 'scrolled' du footer
    footer.classList.remove('scrolled');
    } else {
    // Lorsque l'utilisateur n'est pas en bas de la page, on ajoute la classe 'scrolled' au footer
    footer.classList.add('scrolled');
    }
    });