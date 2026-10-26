const button = document.getElementById("theme-toggle");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    button.textContent = "Light mode";
  } else {
    button.textContent = "Dark mode";
  }
});