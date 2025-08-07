const form = document.querySelector('.form-contato');
const mensagem = document.getElementById('mensagem-enviada');
const mensagemErro = document.getElementById('mensagem-erro'); // Crie um elemento para mensagens de erro no seu HTML

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      mensagem.style.display = 'block';
      if (mensagemErro) mensagemErro.style.display = 'none'; // Oculta a mensagem de erro se estiver visível
    } else {
      console.error('Erro no envio do formulário:', response.status);
      if (mensagemErro) {
        mensagemErro.textContent = 'Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
        mensagemErro.style.display = 'block';
      } else {
        alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
      }
    }
  } catch (error) {
    console.error('Erro de rede:', error);
    if (mensagemErro) {
      mensagemErro.textContent = 'Erro de rede ao tentar enviar sua mensagem. Verifique sua conexão.';
      mensagemErro.style.display = 'block';
    } else {
      alert('Erro de rede ao tentar enviar sua mensagem. Verifique sua conexão.');
    }
  }
});