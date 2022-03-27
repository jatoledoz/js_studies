var grade = prompt("Digite a nota do aluno:")
var student_abscence = prompt("Digite a quantidade de faltas do aluno:")
var max_abscence = 15
var mean = 7

var result = grade >= mean && student_abscence <= max_abscence ? "Aluno aprovado" : "Aluno reprovado!"

document.write(result)