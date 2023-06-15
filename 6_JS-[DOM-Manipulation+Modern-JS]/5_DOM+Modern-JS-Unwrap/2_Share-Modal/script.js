const modal = document.querySelector(".modal");
console.log(modal);

const btn = document.querySelector(".btn-share");
console.log(btn);

const overlay = document.querySelector(".overlay");
console.log(overlay);

function openModal(){

    console.log("working");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");

};

const closeModal = () => {

    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");

};






