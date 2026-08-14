const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        if (!curtiu) {
            texto.textContent = parseInt(texto.textContent) + 1;
            curtiu = true;
        } else {
            texto.textContent = parseInt(texto.textContent) - 1;
            curtiu = false;
        }
    });
});
