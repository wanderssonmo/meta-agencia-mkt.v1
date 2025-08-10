    // Função para enviar dados para o WhatsApp
    function enviarWhatsApp(event) {
      event.preventDefault();
      let nome = document.getElementById('nome').value;
      let email = document.getElementById('email').value;
      let telefone = document.getElementById('telefone').value;
      let plano = document.getElementById('plano').value;
      let mensagem = document.getElementById('mensagem').value;

      let texto = `Olá, meu nome é ${nome}. Quero contratar o plano ${plano}.%0A%0AContato: ${telefone}%0AE-mail: ${email}%0AMensagem: ${mensagem}`;
      let url = `https://wa.me/55988653505?text=${texto}`;
      window.open(url, '_blank');
    }
