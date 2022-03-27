var num1 = prompt("Digite o primeiro valor:")
var num2 = prompt("Digite o segundo valor:")

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write("Addition between " + num1 + " and " + num2 + " = " + (num1 + num2) + "<br/>")
document.write("Subtraction between " + num1 + " and " + num2 + " = " + (num1 - num2) + "<br/>")
document.write("Multiplication between " + num1 + " and " + num2 + " = " + (num1 * num2) + "<br/>")
document.write("Division between " + num1 + " and " + num2 + " = " + (num1 / num2) + "<br/>")
document.write("Modulus between " + num1 + " and " + num2 + " = " + (num1 % num2) + "<br/>")
document.write("Pre Increment of " + num1 + " is " + (++num1) + " and the increment of " + num2 + " is: " + (++num2) + "<br/>")
document.write("Pre Decrement of " + num1 + " is " + (--num1) + " and the decrement of " + num2 + " is: " + (--num2) + "<br/>")

document.write("<hr/><br/>Arithmetic Operation on value attribution<br/>")

var num3 = prompt("Digite um terceiro valor:")
num3 = parseInt(num3)

document.write("<h3>Value: " + num3 + "</h3>")

num3 += 5
document.write("<br/>'Value += 5' = " + num3)

num3 -= 1
document.write("<br/>'Value -= 1' = " + num3)

num3 *= 3
document.write("<br/>'Value *= 3' = " + num3)

num3 /= 2
document.write("<br/>'Value /= 2' = " + num3)

num3 %= 2
document.write("<br/>'Value %= 2' = " + num3)

num3 += " anos"
document.write("<br/>'Value += ' anos'' = " + num3 + " //concatenating with a string.")