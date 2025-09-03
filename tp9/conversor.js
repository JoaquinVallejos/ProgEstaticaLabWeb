function PaD(){
			var n1,resultado,salida; 
			n1=prompt('Pesos=',0);
			resultado=parseInt(n1)*0.00073;
			salida=document.getElementById("salida");
			salida.value+=n1+' Peso(s) a dolares:'+resultado+'\n'; 
}
function DaP(){
			var n1,resultado,salida; 
			n1=prompt('Dolares=',0);
			resultado=parseInt(n1)*1361.26;
			salida=document.getElementById("salida");
			salida.value+=n1+' Dolar(es) a pesos:'+resultado+'\n'; 
}
function PaR(){
			var n1,resultado,salida; 
			n1=prompt('Pesos=',0);
			resultado=parseInt(n1)*0.0040;
			salida=document.getElementById("salida");
			salida.value+=n1+' Peso(s) a reales:'+resultado+'\n'; 
}
function RaP(){
			var n1,resultado,salida; 
			n1=prompt('Reales=',0);
			resultado=parseInt(n1)*249.72;
			salida=document.getElementById("salida");
			salida.value+=n1+' Real(es) a pesos:'+resultado+'\n'; 
}
function PaE(){
			var n1,resultado,salida; 
			n1=prompt('Pesos=',0);
			resultado=parseInt(n1)*0.00063;
			salida=document.getElementById("salida");
			salida.value+=n1+' Peso(s) a euros:'+resultado+'\n'; 
}
function EaP(){
			var n1,resultado,salida; 
			n1=prompt('Euros=',0);
			resultado=parseInt(n1)*1,587.39;
			salida=document.getElementById("salida");
			salida.value+=n1+' Euro(s) a pesos:'+resultado+'\n'; 
}