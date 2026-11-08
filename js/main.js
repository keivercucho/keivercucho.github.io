
/* =========================================
   KEIVER — DIGITAL UNIVERSE
   Interactive experience
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const heroArt = document.querySelector(".hero-art");
    const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


    // 1. GENERAR ESTRELLAS

    if (hero) {
        const starsLayer = document.createElement("div");

        starsLayer.classList.add("stars-layer");
        starsLayer.setAttribute("aria-hidden", "true");

        hero.prepend(starsLayer);

        for (let i = 0; i < 55; i++) {

            const star = document.createElement("span");

            star.classList.add("star");

            const size = Math.random() * 2.5 + 1;

            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.animationDuration = `${3 + Math.random() * 4}s`;

            starsLayer.appendChild(star);
        }
    }


    
    // 2. CAMBIO DE COLORES DEL PLANETA

const planet = document.querySelector(".planet");

if (planet && heroArt && !prefersReducedMotion) {

    planet.addEventListener("pointerenter", () => {
        heroArt.classList.add("alternate-mode");
    });

    planet.addEventListener("pointerleave", () => {
        heroArt.classList.remove("alternate-mode");
    });

}



    // 3. ANIMACIONES AL DESPLAZARSE

    const elementsToReveal = document.querySelectorAll(
        ".quick-card, .section"
    );

    if ("IntersectionObserver" in window && !prefersReducedMotion) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        elementsToReveal.forEach((element) => {
            element.classList.add("reveal");
            observer.observe(element);
        });

    } else {

        elementsToReveal.forEach((element) => {
            element.classList.add("is-visible");
        });

    }

});
