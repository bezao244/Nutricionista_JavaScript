//pegando os pacientes da tabela
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    //pegando o peso do paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    //pegando a altura do paciente
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    //pegando o local o imc do paciente do paciente
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;
    //fazendo as validacoes para o peso do paciente
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    //fazendo as validacoes para a altura do paciente
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    //validando para fazer o imc
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}
//criando uma funcao para calcular o imc do paciente
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}