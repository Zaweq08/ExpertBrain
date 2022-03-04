do {
	var code = String(Math.floor(Math.random()*9999));
} while ((code[0] == code[1] || code[0] == code[2] || code[0] == code[3] || code[1] == code[2] || code[1] == code[3] || code[2] == code[3]) || (typeof(code[1]) == "undefined" || typeof(code[2]) == "undefined" || typeof(code[3]) == "undefined"));
//console.log("Le code final est : " + code);

var tour = 0;
var gagne = 0;

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
		if (tour > 10 && gagne == 0) {
			alert("Perdu...");
		} else if (places == 4) {
			alert("Gagné!!! Bravo!!");
			gagne = 1;
		}
	} else {
		if (gagne == 0) {
			if (confirm("Vous avez perdu. Recomencer?")) {
				history.go(0);
			}
		} else {
			if (confirm("Vous avez gagné. Recomencer?")) {
				history.go(0);
			}
		}
	}
}

function button() {
	alert("...................................");
}

function affRgl(/*jeu*/) {
	//if (jeu == "eb") {
		alert('Les règles sont proches du MasterMind mais:				les couleurs sont remplacées par des chiffres: (1, 2, 3, 4, 5, 6, 7, 8, 9 et 0),				 il y a bien 4 "emplacements"				les couleurs signifient: 1Vert => 1chiffre est bien placé, 1Jaune => 1chiffre est existant mais pas à la bonne place(sans compter les biens placés), 1Rouge => 1chiffre n\'existant pas dans le code.');
	//}
}









