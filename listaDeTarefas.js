

(() => {
    const criarTarefa = (evento)=>{
    evento.preventDefault();
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(ButtonConclui());

    tarefa.appendChild(BotaoDeleta())
    
    lista.appendChild(tarefa);
  
    input.value = "";
}
const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const ButtonConclui = () =>{
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)
    
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConcli = evento.target

    const tarefaCompleta = botaoConcli.parentElement

    tarefaCompleta.classList.toggle('done')

}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'

    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta
    
}
})()