if (2 == 2 && 3 >= 1 && 'a' === 'a') {
  document.write("<br/>True -> 2 == 2 && 3 >= 1 && 'a' === 'a'")
} else {
  document.write("<br/>False -> 2 == 2 && 3 >= 1 && 'a' === 'a'")
}

if (2 == 2 && 3 >= 1 && 'a' === 'b') {
  document.write("<br/>True -> 2 == 2 && 3 >= 1 && 'a' === 'b'")
} else {
  document.write("<br/>False -> 2 == 2 && 3 >= 1 && 'a' === 'b'")
}

if (2 == 2 || 3 >= 1 || 'a' === 'b') {
  document.write("<br/>True -> 2 == 2 || 3 >= 1 || 'a' === 'b'")
} else {
  document.write("<br/>False -> 2 == 2 || 3 >= 1 || 'a' === 'b'")
}

if (4 == 2 || 3 >= 5 || 'a' === 'b') {
  document.write("<br/>True -> 4 == 2 || 3 >= 5 || 'a' === 'b'")
} else {
  document.write("<br/>False -> 4 == 2 || 3 >= 5 || 'a' === 'b'")
}

if (!(4==2)) {
  document.write("<br/>True -> !(4==2)")
} else {
  document.write("<br/>False -> !(4==2)")
}

if (!(2==2)) {
  document.write("<br/>True -> !(2==2)")
} else {
  document.write("<br/>False -> !(2==2)")
}

document.write("<hr/>")

var grade = prompt("Digite a nota do aluno:")
var student_abscence = prompt("Digite a quantidade de faltas do aluno:")
var max_abscence = 15
var mean = 7

if (grade >= mean && student_abscence <= max_abscence) {
  document.write("<hr/>Aluno está aprovado!")
} else {
  document.write("<hr/>Aluno está reprovado!")
}