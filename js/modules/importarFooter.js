fetch('footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar footer.html: ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    // Aguarde o conteúdo do footer ser inserido no DOM antes de acessar o botão
    const btnTopo = document.getElementById("btn-topo");

    if (btnTopo) {
      // Mostrar ou ocultar o botão ao rolar
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          btnTopo.style.display = "flex";
        } else {
          btnTopo.style.display = "none";
        }
      });

      // Rolagem suave para o topo ao clicar
      btnTopo.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    } else {
      console.warn('O botão "Voltar ao Topo" não foi encontrado no footer.');
    }
  })
  .catch(error => {
    console.error('Erro ao carregar o footer:', error);
    document.getElementById('footer').innerHTML = '<p style="color: red;">Erro ao carregar o footer.</p>';
  });
