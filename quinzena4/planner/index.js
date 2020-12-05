const adicioneTarefa = () => {
    const tarefa = document.getElementById("tarefa").value
    
    const diaSemanaEscolhido = document.getElementById("week-button").value
   
    
    const diaRealizacaoTarefa = document.getElementById(diaSemanaEscolhido)
    diaRealizacaoTarefa.innerHTML += `<p>${tarefa}</p>`
 
    document.getElementById("tarefa").value = ""
    
 }