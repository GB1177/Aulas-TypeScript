// Var, Let, Const
// Var (Escopo global)
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    if (iniciaJogo) {
        var cidade = 'em Uberlândia';
    }
    console.log("".concat(nome, " v\u00E3o jogar ").concat(cidade));
}
iniciarTime(true);
// Let (Escopo local)
