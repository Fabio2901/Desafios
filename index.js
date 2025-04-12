function carLoan(Valor, Porcentagem, Anos){
    return Valor * Porcentagem / 100 * Anos
}

console.log(carLoan(20000,2.5,5));