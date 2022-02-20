// Var, Let, Const

// Var (Escopo global)

function iniciarTime(iniciaJogo: boolean){
    var nome = 'Messi e amigos';

    if (iniciaJogo){
        var cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);

}

iniciarTime(true);

// Let (Escopo local)