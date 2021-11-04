/* pegando o botao de clique do mouse no input de adicionar*/
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    /*selecionando o formulario para pegar os dados inseridos nos input*/
    var form = document.querySelector("#form-adiciona");

    //ultilizando a funcao para obter as informacoes do paciente
    var paciente = obtemPacienteDoFormulario(form);
   
    //ultilizando as informacoes para montar a tr
    var pacienteTr = montaTr(paciente);
    
    //pegando a tabela e colocando a tr nela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //resetando o formulario apos o clique de adicao
    form.reset();
});    

// criando um funcao para criar um objeto paciente
function obtemPacienteDoFormulario(form) {

    var paciente = {
        //pegando os dados do input e colocando no objeto paciente
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
//criando uma funcao de montar tr
function montaTr(paciente) {
    //criando uma tr e adicionando uma classe nele
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
   
    //colocando as td dentro do tr e ja passando os valores do td
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
//criando uma funcao para montar as td ja com as classes
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}