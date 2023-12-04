const bodySetColorRef = document.querySelector("body");
const textColorRef = document.querySelector(".color");
const btnChangeColorRef = document.querySelector(".change-color");

btnChangeColorRef.addEventListener("click", handleClick);

function handleClick() {
  const setColor = getRandomHexColor();
  bodySetColorRef.style.backgroundColor = setColor;
  textColorRef.textContent = setColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
