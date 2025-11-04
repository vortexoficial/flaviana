/* --- script.js (Loader Corrigido) --- */

// Lógica para o Loader (com tempo fixo para a animação)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    // Tempo que o loader fica na tela (2500ms = 2.5 segundos)
    // Este tempo deve ser o mesmo da animação 'fillLtoR' no CSS
    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out');
            
            // Opcional: Remove o loader do HTML após a animação de fade-out
            // (400ms = tempo da transição de opacidade 'fade-out' no CSS)
            setTimeout(() => {
                if (loader) loader.remove();
            }, 400); 
        }
    }, 2500); // 2.5 segundos
});


// Lógica para Animação Fade-in no Scroll
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length === 0) {
        return;
    }

    // Configura o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a observação após animar
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    // Observa cada elemento
    fadeInElements.forEach(el => {
        observer.observe(el);
    });
});