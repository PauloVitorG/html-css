// Função para controlar a animação do rodapé
function handleFooterAnimation() {
    const footer = document.getElementById("footer");
    const scrollY = window.scrollY;

    if (scrollY < 100) {
        footer.classList.add("animated");
    } else {
        footer.classList.remove("animated");
    }
}

// Chamar a função quando ocorrer o evento de scroll
window.addEventListener("scroll", handleFooterAnimation);