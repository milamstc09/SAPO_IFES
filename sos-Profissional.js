const carousel = document.getElementById("carousel");
const wrapper = document.querySelector(".carousel-wrapper");

let pos = 0;

function avancar() {

    const card = carousel.querySelector(".card-carousel");
    const estilo = getComputedStyle(carousel);

    const gap = parseInt(estilo.gap);
    const larguraCard = card.offsetWidth + gap;

    const max = carousel.scrollWidth - wrapper.clientWidth;

    pos = Math.min(pos + larguraCard, max);

    carousel.style.transform = `translateX(-${pos}px)`;
}

function voltar() {

    const card = carousel.querySelector(".card-carousel");
    const estilo = getComputedStyle(carousel);

    const gap = parseInt(estilo.gap);
    const larguraCard = card.offsetWidth + gap;

    pos = Math.max(pos - larguraCard, 0);

    carousel.style.transform = `translateX(-${pos}px)`;
}
