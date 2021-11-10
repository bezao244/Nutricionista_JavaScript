var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){
    //criando um varaivel de requisicao
    var xhr = new XMLHttpRequest();
    //configurando a requisicao com o tipo get e o destino
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacioouiuhiuhentes");
    xhr.addEventListener("load", function(){
        //fazendo validacoes de erros possiveis
        if(xhr.status == 200){
            var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        //adicionando os pacientes da requisicao na tabela
        pacientes.forEach( function(paciente){
            adicionaPaciente(paciente);
        });
        }else{
            //mostrando o tipo do erro 
            console.log(xhr.status)
            console.log(xhr.responseText);
            var pegSpan = document.querySelector("#erro-ajax");
            pegSpan.classList.remove("invisivel");
        }
    });
    //enviando a requisicao
    xhr.send();
});