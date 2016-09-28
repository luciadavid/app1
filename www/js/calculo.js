function calcular(){
	var form = document.calculoIMC;
	var altura = form.altura.value;
	var peso =Number(form.peso.value);

	if(altura.indexOf(',')>-1){
		altura=altura.replace(',','.');	
	}

	altura=Number(altura);

	var IMC=peso/Math.pow(altura,2);
	var imcNew=IMC.toFixed(2);
	var resultado ='O Seu IMC é '+imcNew+'<br>';

	/*Novo*/
	if(IMC<18.5){
		resultado +='Voçê encontra-se abaixo do peso ideal!';
	}else if(IMC <25){
		resultado +='Voçê está no seu peso normal, PArabéns!';
	}else if(IMC<30){
		resultado +='Voçê está acima do seu peso (sobrepeso)'
	}else if(IMC<35){
		resultado +='Obesidade grau I';
	}else if(IMC<40){
		resultado +='Obesidade grau II';
	}else{
		resultado +='Obesidade grau III';
	}


	/*Até AQUI*/

	document.getElementById('resultado').innerHTML=resultado;
			}