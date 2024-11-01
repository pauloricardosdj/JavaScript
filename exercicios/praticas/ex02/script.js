// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do cálculo)

function calcmedia(n1, n2, n3) {
    const medianota = (n1 + n2 + n3) / 3;
    console.log(`A média desse aluno é: ${medianota}`)
}

calcmedia(9, 7, 3);