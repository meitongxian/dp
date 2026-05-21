let capitalise = document.querySelectorAll(".small-caps");

capitalise.forEach((phrase) => {
    phrase.innerText = phrase.innerText.toUpperCase();
});

function placeIndex() {
    let indexItems = document.querySelectorAll(".index-item");

    const radiusX = window.innerWidth / 2 * 0.8;
    const radiusY = window.innerHeight / 2 * 0.8;

    let count = 0;

    indexItems.forEach((item) => {

        let angle = (count * (Math.PI * 2 / indexItems.length)) - Math.PI / 2;
        let x = window.innerWidth / 2 + Math.cos(angle) * radiusX;
        let y = window.innerHeight / 2 + Math.sin(angle) * radiusY;

        item.style.left = `${x}px`;
        item.style.top = `${y}px`;

        count++;

    });
}

placeIndex();
window.addEventListener('resize', placeIndex);
