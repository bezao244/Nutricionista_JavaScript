var campoFiltro = document.querySelector("#filtrar-tabela");

//escutando o evento de digitacao para filtrar a tabela
campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    //so vai fazer o filtro se digitar alguma coisa no input
    if(this.value.length >0){
        //criando um for para passar por todos os pacientes da lista para fazer a filtragem
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
    
            //pegando o td de nome
            var tdNome = paciente.querySelector(".info-nome");
            //pegando o valor do td
            var nome = tdNome.textContent;
            //criando uma expressao regular para fazer um melhor filtro
            var expressao = new RegExp(this.value, "i");
            //fazendo a filtragem por meio de adicao de classes com display none e caso o filtro der tira a //classe
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    //e caso apagar o que tinha digitado tira as classes de invisivel e mostra todos pacientes    
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});