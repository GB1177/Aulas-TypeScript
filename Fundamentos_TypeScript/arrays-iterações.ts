let notasAlunos: number[] = [10, 8, 8.5, 7];

// Índices - in
for (let i  in notasAlunos){
    console.log(i);
}

// Valores - of
for (let notasAluno of notasAlunos){
    console.log(notasAluno);
}