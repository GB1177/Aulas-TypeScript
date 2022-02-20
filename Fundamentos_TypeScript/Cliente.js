var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou ".concat(this.nome, " e tenho ").concat(this.idade, " anos ");
    };
    return Cliente;
}());
var Joao = new Cliente('João', 25);
var apresentacao = Joao.apresentar();
console.log(apresentacao);
var Maria = new Cliente('Maria', 22);
console.log(Maria.apresentar());
