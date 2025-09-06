function primos() {
    var salida = "", i, e;
    for (i=2;i<=100;i++) {
        esPrimo=true;         
        for (e=2;e<i;e++) {  
            if (i%e===0) {     
                esPrimo=false;   
                break;             
            }
        }
        if (esPrimo) {
            salida +=i+" ";
        }
    }
    document.getElementById("salida").textContent = salida;
}