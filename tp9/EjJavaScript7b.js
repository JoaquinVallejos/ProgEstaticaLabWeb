function pares(){
    var salida= "";
    for (var i=0; i<500; i++){
        if (i%2==0){
            salida += i + " ";   
        }
    }
    document.getElementById("salida").textContent = salida;
}