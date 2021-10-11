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
export default ButtonConclui