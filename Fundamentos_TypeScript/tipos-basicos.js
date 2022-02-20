// Booleans (Verdadeiro ou Falso)
var estaPago = true;
// Number
var idade = 23;
var valor = 29.99;
// String
var empresa = 'Algaworks';
// Template Strings
var nome = 'GB';
console.log("Ol\u00E1, meu nome \u00E9 ".concat(nome, " e tenho ").concat(idade, " anos"));
// Arrays 
var notas = [8, 6, 7, 9];
// Tuple 
var alunos = ['GB', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
// Enum 
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
// Any
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
// Utilizações do "Any" ...
// Biblioteca de terceiros 
// Migração de JS pra TS
// Outro exemplo:  array com vários tipos de dados
// Void (Não aceita retorno)
function alerta() {
    //...alert('Operação permitid');
}
// Null e Undefined -> Não faz muito sentido
var u = undefined;
var n = null;
// null e undefined sao subtipos de outros tipos
nome = undefined;
nome = null;
