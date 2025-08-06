/*document.getElementById("dark-md").addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});*/

document.querySelectorAll("#escondeu").forEach(function (button) {
  button.addEventListener("click", function (event) {
    const section = event.target.closest("section");
    section.classList.toggle("escondeu");
  });
});


const html = document.documentElement;
const toggleBtn = document.getElementById("dark-md");

// Aplica o tema salvo no carregamento da página
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

// Ao clicar no botão, alterna o tema e salva no localStorage
toggleBtn.addEventListener("click", function () {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

