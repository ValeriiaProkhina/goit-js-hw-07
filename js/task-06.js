const boxesRef = document.querySelector("#boxes");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy");
const inputRef = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    Object.assign(box.style, {
      width: parseInt("30px") + i * 10 + "px",
      height: parseInt("30px") + i * 10 + "px",
      background: getRandomHexColor(),
    });
  }
}

btnCreateRef.addEventListener("click", () => {
  if (inputRef.value >= 1 && inputRef.value <= 100) {
    createBoxes(inputRef.value);
    inputRef.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

btnDestroyRef.addEventListener("click", destroyBoxes);

// const boxesRef = document.querySelector("#boxes");
// const btnCreateRef = document.querySelector("button[data-create]");
// const btnDestroyRef = document.querySelector("button[data-destroy");
// const inputRef = document.querySelector("input");

// function createBoxes(amount) {
//   if (amount <= 100) {
//     const box = document.createElement("div");
//     Object.assign(box.style, {
//       width: "30px",
//       height: "30px",
//       background: getRandomHexColor(),
//       position: "relative",
//       top: "10px",
//       left: "10px",
//     });
//   }
// }
//   const box = document.createElement("div");
//   Object.assign(box.style, {
//     width: "30px",
//     height: "30px",
//     background: getRandomHexColor(),
//     position: "relative",
//     top: "10px",
//     left: "10px",
//   });
//   boxesRef.append(box);
// }

// console.log(box);
// inputRef.addEventListener("input", (e) => {});
// inputRef.addEventListener("input", (e) => {
//   boxesRef.append((box) * e.target.value);
// });
// btnCreateRef.addEventListener("click", () => {});

// inputRef.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   const box = document.createElement("div");
//   Object.assign(box.style, {
//     width: "30px",
//     height: "30px",
//     background: getRandomHexColor(),
//     position: "relative",
//     top: "10px",
//     left: "10px",
//   });
//   document.body.append({ box } * e.target.value);
// });

// btnCreateRef.addEventListener("click", createBoxes);

// const box = document.createElement("div");
// box.border = "1px solid tomato";
// box.textContent = "Hello";
// boxesRef.innerHTML(box);
// const box = document.createElement("div");
// box.style.width = "10px";
// box.style.height = "10px";
// box.border = "1px solid black";
// function createBoxes(amount) {
//   if (amount <= 100) {
//     boxesRef.append(box);
//   }
// }
