var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
var i;
function F(){
    document.write('For <br> <ul>');
    for(i=0;i<12;i++){
        document.write('<li>'+meses[i]+'</li>');
    }
    document.write('</ul>');
}

function W(){
    i=0;
    document.write('While <br> <ul>');
    while (i<12){
    document.write('<li>'+meses[i]+'</li>');
    i++;
    }
    document.write('</ul>');
    }

function DW(){
    i=0;
    document.write('Do while <br> <ul>');
    do{
        document.write('<li>'+meses[i]+'</li>');
    i++;
    } while (i<12);
    document.write('</ul>');
}

function FI(){
    document.write('For In <br> <ul>');
    for (i in meses){
        document.write('<li>'+meses[i]+'</li>');
    }
    document.write('</ul>');
}