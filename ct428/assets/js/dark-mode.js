let switchBtn = document.querySelector(".switch-mode__button");
let body = document.querySelector("body");
console.log(switchBtn);
const changeModeHandler = () => {
    body.classList.toggle("active");
    switchBtn.classList.toggle("active");
};
switchBtn.addEventListener("click", changeModeHandler);
