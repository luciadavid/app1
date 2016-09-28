function calcular(){
	var form = document.CalculoIMC;
	var altura = form.altura.value;
	var peso = Number(form.peso.value);
	
	if(altura.indexOf(',')>-1){
		altura=altura.replace(',','.');
	}	 

	altura=Number(altura);
	var IMC=peso/Math.pow(altura,2);
	var imcNew=IMC.toFixed(2);
	var resultado='O seu IMC é'+imcNew;

/*NOVO*/
	if (IMC<18.5) {
		resultado +='voce encontra se a baixo o peso ideal'}
		else if(IMC<25){
		resultado +='voce esta no seu peso ideal, Parabens'}
		else if(IMC<30){
			resultado +='voce esta acima do seu peso ideal'}
		else if(IMC<35){
			resultado +='Obesidade grau I'}	
		else if(IMC<40){
		resultado +='Obesidade grau II'}		
		else{
			resultado +='Obesidade grau III'}

		


/*ATE AQUI*/
	document.getElementById('resultado').innerHTML=resultado;
	
}