function suma(){
			var n1,n2,suma,salida; 
			n1=prompt('valor1=',0);
			n2=prompt('valor2=',0);
			suma=parseInt(n1)+parseInt(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'+'+n2+'='+suma+'\n'; 
		}
function resta(){
			var n1,n2,suma,salida; 
			n1=prompt('valor1=',0);
			n2=prompt('valor2=',0);
			suma=parseInt(n1)-parseInt(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'-'+n2+'='+suma+'\n'; 
		}
function multiplicacion(){
			var n1,n2,suma,salida; 
			n1=prompt('valor1=',0);
			n2=prompt('valor2=',0);
			suma=parseInt(n1)*parseInt(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'x'+n2+'='+suma+'\n'; 
		}
function division(){
			var n1,n2,suma,salida;
			n1=prompt('valor1=',0);
			n2=prompt('valor2=',0);
			suma=parseInt(n1)/parseInt(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'/'+n2+'='+suma+'\n'; 
		}
function potenciar(){
			var n1,n2,suma,salida; 
			n1=prompt('valor1=',0);
			n2=prompt('valor2=',0);
			suma=Math.pow(parseInt(n1),parseInt(n2));
			salida=document.getElementById("salida");
			salida.value+=n1+'^'+n2+'='+suma+'\n'; 
		}
function cuadrado(){
			var n1,suma,salida;
			n1=prompt('valor1=',0);
			suma=parseInt(n1)*parseInt(n1);
			salida=document.getElementById("salida");
			salida.value+=n1+'^'+n1+'='+suma+'\n';
		}