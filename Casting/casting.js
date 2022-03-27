var variable1 = prompt('Digite um número:')
var variable2 = prompt('Digite um segundo número:')

document.write("<h2>Working without casting</h2>")
document.write(variable1 + variable2)
document.write("<p>Elements were concatenated</p>")

document.write("<hr/>")

variable1 = parseInt(variable1)
variable2 = parseInt(variable2)

document.write("<h2>Working with casting parseInt()</h2>")
document.write(variable1 + variable2)
document.write("<p>Elements were summed</p>")

variable1 = parseFloat(variable1)
variable2 = parseFloat(variable2)

document.write("<h2>Working with casting parseFloat()</h2>")
document.write(variable1 + variable2)
document.write("<p>Elements were summed</p>")

document.write("<h2>Working with casting toString()</h2>")
document.write(variable1.toString() + variable2.toString())
document.write("<p>Elements were concatenated</p>")