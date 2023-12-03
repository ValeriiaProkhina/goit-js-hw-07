const boxesRef = document.querySelector("#boxes");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    Object.assign(box.style, {
      width: parseInt("30px") + i * 10 + "px",
      height: parseInt("30px") + i * 10 + "px",
      backgroundColor: getRandomHexColor(),
    });
    boxesRef.append(box);
  }
}

btnCreateRef.addEventListener("click", () => {
  if (boxesRef.querySelector("div") !== null) {
    boxesRef.innerHTML = "";
  }
  if (inputRef.value >= 1 && inputRef.value <= 100) {
    createBoxes(inputRef.value);
    inputRef.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}

btnDestroyRef.addEventListener("click", destroyBoxes);
