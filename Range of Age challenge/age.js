var username = prompt("Entre com o nome:")
var age = prompt("Entre com a idade:")

if (age < 15) {
  document.write(username + " é criança!")
} else if (age >= 15 && age < 30 ) {
  document.write(username + " é jovem!")  
} else if (age >= 30 && age < 60) {
  document.write(username + " é adulto!")  
} else {
  document.write(username + " é idoso!")
}