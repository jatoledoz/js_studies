var a = 10
var b = 20
var c = null

document.write('<hr/>')
document.write('<p>A: ' + a + '</p>')
document.write('<p>B: ' + b + '</p>')
document.write('<p>C: ' + c + '</p>')

document.write('<hr/><h2>Exchanging values from a and b')

c = b
b = a
a = c

document.write('<hr/><h2>Result:</h2>')
document.write('<p>A: ' + a + '</p>')
document.write('<p>B: ' + b + '</p>')
document.write('<p>C: ' + c + '</p>')