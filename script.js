const corr = ["Parijs", "8", "IJsselmeer", ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"], ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]];

function checkAnswers(){
	var x = 0;
	var y = 0;
	var inputs = document.querySelectorAll("input");
	for (i in inputs){
		if (i >= 0 && i <= 9 && inputs[i].value == corr[i]){
			console.log(inputs[i].value);
			inputs[i].style.backgroundColor = "#24FF00";
			x++;
		}
		else if (i >= 0 && i <= 9 && corr[i].includes(inputs[i].value) && inputs[i].value.length > 1){
			console.log(inputs[i].value);
			inputs[i].style.backgroundColor = "#24FF00";
			x++;
		}
		if(i >= 0 && i <= 9){
			y++;
		}
	}
	document.querySelector(".answers").innerText = "Aantal goede antwoorden: "+x+" van de "+y;
}