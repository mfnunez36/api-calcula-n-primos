const generaPrimos = (num: number) => {
    let arrPrimos = [];
    //pasamos por todos los numeros 
    for (let i = 0; i <= num; i++) {
        let contador = 0;
        // verificamos que sea primo
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                contador++;
            }
        }
        if (contador === 2) {
            //agregamos los primos
            arrPrimos.push(i);
        }
    }
    //orden descendente
    return arrPrimos.sort((a, b) => {
        if (a > b) {
            return -1;
        }
        else {
            return 1;
        }
    });
};

export default generaPrimos;