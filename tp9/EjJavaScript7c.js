function funcion() {
    var salida = "", res;
    for(var i=0; i<100;i++){
        res=3 * i + 5- Math.pow(i,2);
        salida += res + " ";
    }
    document.getElementById("salida").textContent = salida;
}