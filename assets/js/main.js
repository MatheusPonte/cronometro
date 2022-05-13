function criarElementos(tag, classe, nome) { // funcão criar tag/classe/nome
    const elementoTag = document.createElement(tag); //cria a tag
    elementoTag.classList.add(classe); // cria a classe
    elementoTag.innerHTML = nome || ''; // Se não receber o nome sera string vazia.
    return elementoTag;
};
//criando elementos com a função a cima
const div = criarElementos('div', 'titulo', 'Cronometro');
const comecar = criarElementos('button', 'comecar', 'começar');
const pausar = criarElementos('button', 'pausar', 'Pausar');
const parar = criarElementos('button', 'parar', 'Parar');
const divGlass = criarElementos('div', 'glass', '')
const caseButton = criarElementos('div', 'case', '')
let intervalo;
let horas = 0;
let minutos = 0;
let segundos = 0;
const numeroDoCronometro = criarElementos('div', 'cronometro', `${converterTempo(horas)}:${converterTempo(minutos)}:${converterTempo(segundos)}`);


// Selecionadno a sessão
const sessaoPrincipal = document.querySelector('.principal');
// Adicionando tags e classes na sessão com appendchild
function adicionarTagsClasses(elementos, elementoPai) {
    elementoPai.appendChild(elementos);
};

adicionarTagsClasses(divGlass, sessaoPrincipal)
adicionarTagsClasses(div, sessaoPrincipal);
adicionarTagsClasses(numeroDoCronometro, sessaoPrincipal);
adicionarTagsClasses(caseButton, sessaoPrincipal)
adicionarTagsClasses(comecar, caseButton);
adicionarTagsClasses(pausar, caseButton);
adicionarTagsClasses(parar, caseButton);

//
function converterTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}




// iniciativa e pausa //////
comecar.onclick = function iniciarTempo() {
    comecar.classList.add('verde')
    comecar.setAttribute('disabled', 'disabled');
    intervalo = setInterval(() => {
        segundos = segundos + 1
        if (segundos >= 60) {
            minutos = minutos + 1
            segundos = 0

        }
        if (minutos >= 60) {
            horas = horas + 1
            minutos = 0
        }

        numeroDoCronometro.innerHTML = `${converterTempo(horas)}:${converterTempo(minutos)}:${converterTempo(segundos)}`
    }, 1000);
    // parar.removeAttribute('disabled')
    parar.classList.remove('vermelho')

}

pausar.onclick = function pausarTempo() {
    clearInterval(intervalo);
    comecar.removeAttribute('disabled')
    comecar.classList.remove('verde')
}

parar.onclick = function pararTempo() {
    parar.classList.add('vermelho')
        // parar.setAttribute('disabled', 'disabled');
    clearInterval(intervalo)
    segundos = 00
    minutos = 00
    horas = 00
    numeroDoCronometro.innerHTML = `${converterTempo(horas)}:${converterTempo(minutos)}:${converterTempo(segundos)}`
    comecar.removeAttribute('disabled')
    comecar.classList.remove('verde')



};
/////

//funcão adicionar 0
// function converterTempo(zero, len) {
//     const converterTempo = string(numeroDoCronometro);
//     const conter = converterTempo.length;

//     if (conter < len) {
//         converterTempo = 0 + converterTempo

//         conter++;
//     }
//     return converterTempo
// }

// numeroDoCronometro = converterTempo(0, 1);