var parameter = prompt('Digite um número:')

switch (parseInt(parameter)) {
  case 1:
    document.write("Parameter 1")
    break;
  case 2:
    document.write("Parameter 2")
    break;
  case 3:
    document.write("Parameter 3")
    break;
  default:
    document.write("Default")
    break;
}