var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");


//criando um escutador de duplo clique para remover o paciente
tabela.addEventListener("dblclick", function(event){
    //pegando o item que foi clicado e subindo para o pai que seria o tr paciente
    var pacienteClicado = event.target.parentNode;
    pacienteClicado.classList.add("fadeOut");

    //esperando 0.5 segundos para aparecer a animacao de remocao
    setTimeout(() => {
        pacienteClicado.remove();
    }, 500);
})
/*NAO ESTAVA APAGANDO OS NOVOS PACIENTES ADICIONADOS
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado!");
        this.remove();
    });
});
*/