function substituirBodyComDelay() {
  setTimeout(() => {
    const bodyOriginal = document.getElementsByTagName("body")[0];

    const novoBody = document.createElement("body");
    novoBody.innerHTML = `
        <header>
          <a href="">
            <img src="/image/LogoAvengers.png" alt="Logo dos Avengers" />
          </a>
          <nav>
            <a href="https://g.co/kgs/hNLTxSd" target='blank'>Filmes</a>
            <a href="https://www.adorocinema.com/filmes/filme-130440/creditos/" target='blank'>Elenco</a>
            <a href="https://universocinematograficomarvel.fandom.com/pt-br/wiki/Vingadores" target='blank'>Wiki</a>
          </nav>
        </header>
        <main>
          <div class="background-image"></div>
          <div class="conteudoPrincipal">
            <img id="imagem-personagem" src="/image/CapAmerica2.png" class="capitao-america">
            <div class="texto">
              <h1>AVENGERS: INFINITY WAR</h1>
              <p>
                Em "Guerra Infinita", os Vingadores enfrentam Thanos, que busca
                reunir as Joias do Infinito para eliminar metade da vida no
                universo. Os heróis sofrem perdas devastadoras, enquanto Thanos
                finalmente consegue as Joias e executa seu plano. O filme termina
                com o universo em desespero e a promessa de uma sequência.
              </p>
              <a href='https://www.youtube.com/watch?v=DPOw2hfgCHI' target='blank'><button class="button-49" role="button"><span>Assita o trailer</span></button></a>
            </div>
          </div>
        </main>
        <footer>
          <span> © 2024 Todos os direitos reservados aos criadores. </span>
        </footer>
      `;

    document.documentElement.replaceChild(novoBody, bodyOriginal);
  }, 13000);
}

window.onload = substituirBodyComDelay;

function trocarImagensPersonagens() {
    const imagens = [

        "/image/DrEstranho.png",
        "/image/HomemDeFerro.png",
        "/image/CapAmerica2.png",
    ];
    let indiceAtual = 0;

    setInterval(function() {
        document.getElementById("imagem-personagem").src = imagens[indiceAtual];
        indiceAtual = (indiceAtual + 1) % imagens.length;
    }, 6000); 
}

document.addEventListener("DOMContentLoaded", function() {
    trocarImagensPersonagens();
});

