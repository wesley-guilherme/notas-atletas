// aqui vamos desenvolver um programa cálculo de notas para utilizar em eventos esportivos

// nome do aluno, notas[]

// corte da maior nota e corte da menor nota

// calcular a média de notas já excluindo a maior e a menor

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedia(atleta) {
    let ordenadas = [...atleta.notas].sort((a, b) => a - b);

    let notasValidas = ordenadas.slice(1, 4)

    let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notasValidas.length;

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media.toLocaleString("pt-BR")}`);
    console.log("");
}

atletas.forEach(calcularMedia)



