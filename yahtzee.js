var elementTableau,
	elementJeu,
	elementCombinaisonDepart,
	elementAvantJeu,
	n=0,
	elementDesMemoire,
	nombre_alea = new Array();
	table2 = new Array();

function initialisation(){
	elementTableau = document.getElementById('tableau_de_jeu'),
	elementAvantJeu = document.getElementById('AvantJeux'),
	elementJeu = document.getElementById('jeux'),
	elementBouton = document.getElementById('button');
	elementCombinaisonDepart = document.getElementById('combinaison_depart');
	elementDesMemoire = document.getElementById('des_memoire');
		
	elementTableau.hidden = false;
	elementCombinaisonDepart.hidden = false;
	elementJeu.hidden = false;
	elementBouton.hidden = false; 
	elementAvantJeu.hidden = true;
	elementDesMemoire.hidden = false;
}

function lancer_les_des(){
	nombre_alea = alea();
	elementJeu.innerHTML = '<img src = "images/De'+nombre_alea[0]+'.png" id = "1" onClick = "repet('+nombre_alea[0]+', 1)" class = "des" />';
	elementJeu.innerHTML += '<img src = "images/De'+nombre_alea[1]+'.png" id = "2" onClick = "repet('+nombre_alea[1]+', 2)" class = "des" />';
	elementJeu.innerHTML += '<img src = "images/De'+nombre_alea[2]+'.png" id = "3" onClick = "repet('+nombre_alea[2]+', 3)" class = "des" />';
	elementJeu.innerHTML += '<img src = "images/De'+nombre_alea[3]+'.png" id = "4" onClick = "repet('+nombre_alea[3]+', 4)" class = "des" />';
	elementJeu.innerHTML += '<img src = "images/De'+nombre_alea[4]+'.png" id = "5" onClick = "repet('+nombre_alea[4]+', 5)" class = "des" />';
}

function alea() {
	var x=0;
	var table = new Array();
	for(var i =0; i<5 ; i++){
		x = Math.floor(Math.random()*6+1);
		table[i] = x;
	}
	return table;
}

function repet(nombre, de){
	table2[n] = nombre
	n++;
	var elementDes = document.getElementById(de);
	elementDes.style.zIndex = "-10";
	
	for (var i = 0; table2.length>i;i++) {
		if(i==0){
			elementDesMemoire.innerHTML = '<img src = "images/De'+table2[i]+'.png" id = "deuxieme_de" class = "des" />';
		} else{
			elementDesMemoire.innerHTML += '<img src = "images/De'+table2[i]+'.png" id = "deuxieme_de" class = "des"/>';
		}
		
	}
	
}
