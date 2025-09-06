var valor, salida;
valor = prompt("HOLAAAA","");

function ValorSeleccionado() {
    if (valor<0) {
        return document.write(-1);
    } else if ((valor>=0)&&(valor<10)){
        return document.write(0);
    } else if ((valor>=10)&&(valor<50)){
        return document.write(1);
    } else if ((valor>=50)&&(valor<100)){
        return document.write(2);
    } else if (valor>=100){
        return document.write(3);
}

}

