export default function handleIntersection(entries, observer) {
    const aboutSection = document.querySelector(".about-section");

    if (entries[0].isIntersecting) {
        aboutSection.classList.add("show");
        observer.disconnect(); // Animasyon bir kez çalıştıktan sonra gözlemciyi kapat
    }
}

const aboutSectionObserver = new IntersectionObserver(handleIntersection);

const aboutSection = document.querySelector(".about-section");
if (aboutSection) {
    aboutSectionObserver.observe(aboutSection);
}