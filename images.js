// // images on hover

let indexLinks = document.querySelectorAll(".index-item > a");
let imgWrapper = document.querySelector(".img-wrapper");
let img = document.querySelector(".img-wrapper > img");

for (let i = 0; i < 11; i++) {
    indexLinks[i].addEventListener("mouseenter", () => {
        // console.log("hovered");
        imgWrapper.classList.add("img-wrapper_active");
        img.src = `images/` + (i+1) + `.png`;
    });
    indexLinks[i].addEventListener("mouseleave", () => {
        imgWrapper.classList.remove("img-wrapper_active");
        img.src = "";
    });
}
