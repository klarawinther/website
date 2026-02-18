const button = document.getElementById("revealBtn");
const text = document.getElementById("hiddenText");

button.addEventListener("click", () => {
  text.classList.remove("hidden");
  text.classList.add("rainbow");
});
