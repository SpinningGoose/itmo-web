(function() {
    window.addEventListener('load', function() {
        var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
        const footer = document.querySelector('.footer');
        if (footer) {
            const p = document.createElement('p');
            p.textContent = `Loading time: ${loadTime / 1000} s`;
            footer.appendChild(p);
        }
    });
    

    const navLinks = document.querySelectorAll('.nav__link');
    const currentPage = window.location.href;
    console.log("Current path:", currentPage);

    navLinks.forEach(link => {
        if (currentPage == link.href) {
            link.classList.add('nav__link--active');
        }
    });

   /* 
    var links = document.querySelectorAll('.nav__link');
    var currPage = window.location.href;
    var abs = window.location.pathname.split('/').slice(1).toString();
   // const currPage = window.location.pathname.split('/').pop();

    for (var i = 0; i < links.length; i++) {
        var currLink = abs + links[i].getAttribute('href');
        if (currLink == currPage) {
            currLink.classList.add('nav__link--a');
        }
    };*/
})();