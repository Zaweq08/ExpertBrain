var code = String(Math.floor(Math.random()*9999));
var tour = 0;
//console.log(code);

function intitulerPng(p, c, e) {
	p = String(p);
	c = String(c);
	e = String(e);
	var title =  p + c + e + ".png";
	//console.log(title);
	return title;
}


function tester() {
	if (tour <= 10) {
		tour++;
		var pDT = document.getElementById(tour);
		var propUser = document.getElementById('propUser').value;
		var imgPng = document.getElementById(tour + "i")
		var erreurs = 0;
		var couleurs = 0;
		var places = 0;
		var imgTitle = "004.png"
		pDT.innerHTML = propUser[0] + " " + propUser[1] + " " + propUser[2] + " " + propUser[3]
		//console.log(propUser);
		for (var i = 0; i < 4; i++) {
			if (propUser[i] == code[i]) {
				places++;
			} else if (propUser[i] == code[0] || propUser[i] == code[1] || propUser[i] == code[2] || propUser[i] == code[3]) {
				couleurs++;
			} else {
				erreurs++;
			}
		}
		imgTitle = intitulerPng(places, couleurs, erreurs);
		imgPng.setAttribute("src", imgTitle)
		//alert(places + " bien placé(s).");
		//alert(couleurs + " chiffre(s) existant(s). {Hors bien placés.}");
		//alert(erreurs + " erreurs.");
		if (tour > 10) {
			alert("Perdu...");
		} else if (places == 4) {
			alert("Gagné!!! Bravo!!");
		}
	} else {
		if (confirm("Vous avez perdu. Recomencer?")) {
			history.go(0);
		}
	}
}

function button() {
	alert("rien a faire");
}









