var n, i, r=1;

n = prompt("HOLAA INGRESA NUMERO","");

function factorial(){
    for(i=n;i>0;i--){
        r=r*i;
    }
    return document.write(r);
}