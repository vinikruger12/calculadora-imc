function calcular(){
    var sexoH = document.querySelector('input#raH')
    var sexoM = document.querySelector('input#raM')

    var peso = document.querySelector('input#idpeso')
    var altura = document.querySelector('input#idaltura')

    var Npeso = Number(peso.value)
    var Naltura = Number(altura.value)

    var calculo = Npeso/Naltura**2

    var res = document.querySelector('p.res')

}