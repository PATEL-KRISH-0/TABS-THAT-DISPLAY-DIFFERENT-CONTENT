const Gools = document.querySelector(".Gools");
const Vision = document.querySelector(".Vision");
const Histor = document.querySelector(".Histor");

Gools.addEventListener("click", () => {
    const acti = document.querySelectorAll(".active");
    acti.forEach(ele => {
        ele.classList.remove("active");
    });

    const GoolsText = document.querySelector(".Gools-text");
    GoolsText.classList.add("active");
    Histor.classList.remove("Histor")
});

Vision.addEventListener("click", () => {
    const acti = document.querySelectorAll(".active");
    acti.forEach(ele => {
        ele.classList.remove("active");
    });

    const VisionText = document.querySelector(".Vision-text");
    VisionText.classList.add("active");
    Histor.classList.remove("Histor")
});

Histor.addEventListener("click", () => {
    const acti = document.querySelectorAll(".active");
    acti.forEach(ele => {
        ele.classList.remove("active");
    });

    const HistorText = document.querySelector(".Histor-text");
    HistorText.classList.add("active");
    Histor.classList.remove("Histor")
});
