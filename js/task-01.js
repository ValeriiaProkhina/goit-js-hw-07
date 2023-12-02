const categories = document.querySelector("#categories");
const listOfCategory = categories.querySelectorAll(".item");
console.log(`Number of Categories: ${listOfCategory.length}`);
listOfCategory.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});