// Verificar preferência salva ou definir dark mode como padrão
const isDarkMode = localStorage.getItem('darkMode') !== 'false';
document.body.classList.toggle('dark-mode', isDarkMode);

// Atualizar ícone do botão
function updateButtonIcon() {
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.innerHTML = document.body.classList.contains('dark-mode')
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

// Alternar modo ao clicar
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    updateButtonIcon();
});

// Inicializar ícone
updateButtonIcon();
