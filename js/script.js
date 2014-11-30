var inversos = {};//diccionario que almacena los inversos

/** calculo_inversos
* Esta funcion se encarga de calcular el conjunto Zm y el inverso de cada numero si existe
*/
function calculo_inversos(){
	var conjunto_zm= new Array();
	var z = document.getElementById("valor_m").value;
	
	var auxiliar = new Array();
	var contador_aux = 0;
	//se llena el conjunto zm
	for (var i = 0; i <z; i++) {
		conjunto_zm[i]=i;
	};

	//se hayan los inversos:

	for (var i = 0; i < conjunto_zm.length; i++) {
		for (var j = 0; j < conjunto_zm.length; j++) {
			if(((conjunto_zm[i]*conjunto_zm[j])%z)==1){
				auxiliar[contador_aux]=conjunto_zm[j];
				contador_aux++;
			};
		};
		inversos[i]=auxiliar;
		auxiliar = new Array();
		contador_aux = 0;
	};
	pintar_html();
}

/** pintar_html
* Esta funcion se encarga de mostrar en la pagina principal los inversos calculados por la funcion calculo_inversos
*/
function pintar_html(){
	var arreglo;
	var rta = document.getElementById('rta');
	var texto = "";
	for(var i in inversos){
		arreglo = inversos[i];
		if(arreglo.length==0){
			texto = texto+"<blockquote> numero: "+i+"	inverso: No posee inversos</br></blockquote>";
		}
		else{
			texto = texto+"<blockquote> numero: "+i+"	inverso: "+arreglo[0]+"</br></blockquote>";
		}
	}
	rta.innerHTML=texto;
	texto="";
}