// Booleans (Verdadeiro ou Falso)
let estaPago: boolean = true;

// Number
let idade: number = 23;
let valor: number = 29.99;

// String
let empresa: string = 'Algaworks';

// Template Strings
let nome: string = 'GB';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

// Arrays 
let notas: number[] = [8, 6, 7, 9];

// Tuple 
let alunos : [string, number, string] = ['GB', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

// Enum 
enum Cor {Verde, Amarelo,  Azul, Branco};
let corFundo: Cor = Cor.Verde;

// Any
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;
// Utilizações do "Any" ...
// Biblioteca de terceiros 
// Migração de JS pra TS
// Outro exemplo:  array com vários tipos de dados

// Void (Não aceita retorno)
function alerta(): void {
        //...alert('Operação permitid');
}

// Null e Undefined -> Não faz muito sentido
let u: undefined = undefined;
let n: null = null;
// null e undefined sao subtipos de outros tipos

nome = undefined;
nome = null;
