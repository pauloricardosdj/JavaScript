// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do cálculo)

function calcmedia(n1, n2, n3) {
    const medianota = (n1 + n2 + n3) / 3;
    console.log(`A média desse aluno é: ${medianota}`)
}

calcmedia(9, 7, 3);

// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3 primeiras provas + a nota da prova final. O cálculo deve ser o seguinte

function calcmediaadp (n1, n2, n3) {
    const medianota1 = (n1 + n2 + n3)/ 3;
    return medianota1;
}

function calcmediafinal (n1, n2, n3, notapf) {
    const mediasempf = calcmediaadp(n1, n2, n3);
    const mediafinal = (mediasempf + notapf) / 2;
    console.log(`A média final desse aluno é: ${mediafinal}`);

}

calcmediafinal(9, 7, 3, 9);