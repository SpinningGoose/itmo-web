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
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('nav__link--active');
        }
    });

    /*
    var links = document.querySelectorAll('.nav__link')
    var currPage = window.location.toString()
    const currPage = window.location.pathname.split('/').pop();

    for (var i = 0; i < links.length; i++) {
        var currLink = links[i]
        if (currLink.getAttribute('href') == currPage) {
            currLink.classList.add('nav__link--a');
        }
    };*/
})();