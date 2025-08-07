
        fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    // Agora que o footer foi carregado, podemos ativar o botão
    const btnTopo = document.getElementById("btn-topo");

    // Mostrar ou ocultar o botão
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTopo.style.display = "flex";
      } else {
        btnTopo.style.display = "none";
      }
    });

    // Rolagem suave para o topo
    btnTopo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  fetch('footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar footer.html: ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('footer').innerHTML = data;
    // ... (seu código existente para o botão voltar ao topo)
  })
  .catch(error => {
    console.error('Erro ao carregar o footer:', error);
    document.getElementById('footer').innerHTML = '<p style="color: red;">Erro ao carregar o footer.</p>';
  });