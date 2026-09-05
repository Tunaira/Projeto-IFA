//======================================
// Detecta se o foco veio da tecla TAB
//======================================

let tabPressionado = false;

document.addEventListener("keydown", function(event){

    if(event.key === "Tab"){

        tabPressionado = true;

    }

});

//======================================
// Fala o elemento focado
//======================================

document.addEventListener("focusin", function(event){

    if(!tabPressionado) return;

    tabPressionado = false;

    speechSynthesis.cancel();

    let elemento = event.target;
    const tabIndexAtual = document.activeElement.tabIndex;

    let texto = "";

    switch(elemento.tagName){

        case "H1":
        case "H2":
        case "H3":

            texto = "Título. " + elemento.innerText;
            break;

        case "P":

            texto = "Texto. " + elemento.innerText;
            break;

        case "FOOTER":

            texto = "Rodapé da página. " + elemento.innerText;
            break;

        case "FIGCAPTION":

            texto = "Texto da imagem. " + elemento.innerText;
            break;

        case "IMG":

            texto = "Imagem";
            break;

        case "BUTTON":

            texto = "Botão. " + elemento.innerText;
            break;

        case "DIV":

            if (tabIndexAtual == "23"){
               texto = "Leitor de Libras. ";
               break;
            }

        case "A":

            texto = "Link. " + elemento.innerText;
            break;

        case "INPUT":

            let label = document.querySelector(
                "label[for='" + elemento.id + "']"
            );

            if (label) {
                texto = "Campo " + label.innerText;
            } else {
                texto = "Campo de texto";
            }

            break;

    }

    if(texto !== ""){

        let fala = new SpeechSynthesisUtterance(texto);

        fala.lang = "pt-BR";
        fala.rate = 1;
        fala.pitch = 1;

        speechSynthesis.speak(fala);

    }

});

/* ==========================================
   AUMENTAR O TAMANHO DA FONTE
   ========================================== */

// Define o tamanho inicial da fonte em 18 pixels.
let tamanho = 18;

// Obtém o botão "A+" e executa a função quando ele for clicado.
document.getElementById("fonteMais").onclick = function () {

    // Aumenta o tamanho da fonte em 2 pixels.
    tamanho += 2;

    // Aplica o novo tamanho da fonte ao corpo da página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   DIMINUIR O TAMANHO DA FONTE
   ========================================== */

// Obtém o botão "A-" e executa a função quando ele for clicado.
document.getElementById("fonteMenos").onclick = function () {

    // Diminui o tamanho da fonte em 2 pixels.
    tamanho -= 2;

    // Atualiza o tamanho da fonte em toda a página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   ATIVAR/DESATIVAR O ALTO CONTRASTE
   ========================================== */

// Obtém o botão "Alto Contraste".
document.getElementById("contraste").onclick = function () {

    // Adiciona ou remove a classe "altoContraste"
    // sempre que o botão for pressionado.
    document.body.classList.toggle("altoContraste");
};


/* ==========================================
   ATIVAR/DESATIVAR O MODO ESCURO
   ========================================== */

// Obtém o botão "Modo Escuro".
document.getElementById("escuro").onclick = function () {

    // Adiciona ou remove a classe "dark",
    // alterando as cores da página.
    document.body.classList.toggle("dark");
};

/* ==========================================
   LEITURA COMPLETA DA PÁGINA
   ========================================== */

// Função para ler toda a página
function lerPagina() {

    // Interrompe qualquer leitura anterior
    speechSynthesis.cancel();

    // Seleciona os elementos que normalmente contêm texto
    const elementos = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, footer, button, div"
    );

    let textoCompleto = "";
    let tipo = "";

    // Junta todos os textos em uma única string
    elementos.forEach(function(elemento){

        let texto = elemento.innerText.trim();

        switch(elemento.tagName){

            case "H1":
                tipo = "Título principal ";
                break;

            case "H2":
                tipo = "Título ";
                break;

            case "P":
                tipo = "Parágrafo ";
                break;

            case "BUTTON":
                tipo = "Botão ";
                break;

            case "FOOTER":

                tipo = "Rodapé da página ";
                break;

            case "DIV":

               if (elemento.className == "Libras"){
                  tipo = "Elemento ";
                  texto = "Leitor de Libras ";
               }

               break;

            default:
                tipo = "Elemento ";
        }

        if(texto !== ""){
            textoCompleto += tipo + texto + ". ";
        }

    });

    // Cria o objeto de fala
    const fala = new SpeechSynthesisUtterance(textoCompleto);

    fala.lang = "pt-BR";
    fala.rate = 1;     // velocidade
    fala.pitch = 1;    // tom
    fala.volume = 1;   // volume

    // Inicia a leitura
    speechSynthesis.speak(fala);
}

// Para interromper a leitura
function pararLeitura(){
    speechSynthesis.cancel();
}

// Função JavaScript que recebe a URL e altera o src da imagem
function trocarImagem(escolha) {
    if (event.type === 'click' || event.key === 'Enter') {
    const imagemnova=document.getElementById('imagemPrincipal');
    switch(escolha){
        case "1":
          urlNova = 'images(1).jpeg';
          textoprincipal.innerText="Como explicar a Rede Cósmica?";
          texto.innerText="Se olharmos para o Universo a uma grande distância, vemos que as galáxias não estão espalhadas de forma aleatória pelo espaço. Na realidade, elas se organizam em uma gigantesca teia tridimensional conhecida como Rede Cósmica e ela é formada por longos filamentos de gás, e matéria escura, que funcionam como verdadeiras autoestradas espaciais, transportando matéria até os pontos de cruzamento, onde milhares de galáxias se aglomeram. Entre esses filamentos existem imensas bolhas de espaço quase totalmente vazias, conhecidas como vazios cósmicos. O que constrói e mantém toda essa teia é a gravidade, impulsionada principalmente pela matéria escura, que atua como uma estrutura invisível moldando e conectando todo o cosmos desde os primeiros momentos após o Big Bang.";
          descrevefigura.innerText="Imagem da RedeCósmica do Universo ";
          break;
        case "2":
          urlNova = "IMG-20260904-WAOOO9.jpg";
          textoprincipal.innerText="Como explicar o Multiverso?";
          texto.innerText="Propondo que partes do espaço se expandem rapidamente.O multiverso é a hipótese cosmológica de que o nosso universo não seria único, mas sim a parte de um conjunto infinito de universos paralelos coexistentes, cada um deles possuindo suas próprias realidades, dimensões e leis da física. Juntos, esses universos compreendem tudo o que existe a totalidade do espaço, do tempo, da matéria, da energia e das leis ";
          descrevefigura.innerText="Imagem do multiverso ";
          break;
        case "3":
          urlNova = "IMG-20260828-WAOOO11(1).jpg";
          textoprincipal.innerText="O que são constelações?";
          texto.innerText="paragrafo";
          descrevefigura.innerText="Imagem de ";
          break;
        case "4":
          urlNova = "IMG-20260828-WAOOO9.jpg";
          textoprincipal.innerText="O que é o Universo Morto?";
          texto.innerText="O Universo Morto refere-se à hipotética fase final do cosmos, fruto da sua expansão contínua ao longo de trilhões de anos. Nesse estágio, todas as estrelas já consumiram seu combustível e se apagaram, impossibilitando a formação de novos corpos celestes. Sem fontes de calor ou energia e com a matéria completamente dispersa, o espaço atinge a entropia máxima e se torna um lugar vasto, escuro e próximo do zero absoluto, onde não existe movimento, transformação ou qualquer possibilidade de vida.";
          descrevefigura.innerText="Imagem do universo morto";
          break;
        default:
          urlNova = "acessibilidade.png";
          textoprincipal.innerText="O que é Acessibilidade?";
          texto.innerText="        A acessibilidade digital permite que qualquer        pessoa utilize sistemas computacionais        independentemente de suas limitações.";
          descrevefigura.innerText="Figura 1 - Pessoa utilizando computador com tecnologia assistiva. ";
          break;
        }
    imagemnova.src = urlNova;
    lerCartao(textoprincipal.innerText, texto.innerText, descrevefigura.innerText);
    document.getElementById('textoprincipal').focus();
    }
}


/* ==========================================
   LEITURA DOS ELEMENTOS DO FLASHCARD ESCOLHIDO
   ========================================== */

// Função para ler toda a página
function lerCartao(texto1, texto2, texto3) {

    // Interrompe qualquer leitura anterior
    speechSynthesis.cancel();

    let textoCompleto = texto1 + ". " + texto2 + ". " + texto3;

    // Cria o objeto de fala
    const fala = new SpeechSynthesisUtterance(textoCompleto);

    fala.lang = "pt-BR";
    fala.rate = 1;     // velocidade
    fala.pitch = 1;    // tom
    fala.volume = 1;   // volume

    // Inicia a leitura
    speechSynthesis.speak(fala);
}
