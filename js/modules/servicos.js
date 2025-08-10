/* ============================
  JavaScript (comportamento dos "Ver mais")
  Cole antes do </body> ou em arquivo .js
============================ */
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os botões de toggle
  const toggles = document.querySelectorAll('.card-toggle');

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleCard(btn);
    });

    // Permitir toggling com Enter/Space quando botão focado
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(btn);
      }
    });
  });

  // Função que alterna mostrar/esconder a área extra
  function toggleCard(button){
    const card = button.closest('.card');
    const more = card.querySelector('.card-more');

    const isHidden = more.hasAttribute('hidden');

    if (isHidden) {
      more.removeAttribute('hidden');
      button.setAttribute('aria-expanded', 'true');
      button.textContent = 'Fechar';
    } else {
      more.setAttribute('hidden', '');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Ver mais';
    }
  }

  // Permitir abrir card ao pressionar Enter na própria <article>
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const btn = card.querySelector('.card-toggle');
        if (btn) toggleCard(btn);
      }
    });
  });
});
