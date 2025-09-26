// script.js

// Alternar entre tema claro e escuro
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggleBtn.querySelector("i");

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark-theme");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        body.classList.remove("dark-theme");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
}

// Carregar tema salvo no navegador
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Alternar tema ao clicar no botão
themeToggleBtn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-theme") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});

// Rolagem suave ao clicar nos links do menu
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Pequena animação ao passar o mouse nos cards de projeto
const projetos = document.querySelectorAll(".card-projeto");
projetos.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// Exemplo de mensagem de boas-vindas no console
console.log("Bem-vindo ao meu portfólio! 🚀");
