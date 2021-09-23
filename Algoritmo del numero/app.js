function juego(){    

    var numero = Math.floor(Math.random()*101)
    
    let valor = parseInt(prompt("Dame un valor por favor"))

    if (valor === numero){
        alert("Felicitaciones ganaste!! seguro tomas leche papu la leche de los papus")
    }
    else if (valor > numero){
        alert("El numero que ingresaste es mayor")
    }
    else if (valor < numero){
        alert("El numero que ingresaste es menor")
    }
    alert("El número era" + " " + numero)
}