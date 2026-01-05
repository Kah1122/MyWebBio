const toggleDarkMode = document.getElementById("Button");
const setBackground = document.documentElement;


toggleDarkMode.addEventListener("click", () => {
  setBackground.classList.toggle("dark-mode");
});
