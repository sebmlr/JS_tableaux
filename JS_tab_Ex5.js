//Ecrire un programme qui permet d’ajouter une valeur à une position donnée, le programme affiche le contenu du tableau avant et après l’ajout.
const TAILLETABLEAU = 6;
const MIN = 1;
const MAX = 49;

var tab=[];
var index=0;

//+1 de TAILLETABLEAU permet de définir 7 valeurs au lieu des 6 de la constante
for (index = 0; index < (TAILLETABLEAU+1); index++) {
    tab[index] = Math.floor((Math.random() * MAX) + MIN);
}

//on affiche uniquement les 6 positions du tableau
document.write(" Le contenu initial du tableau est : "+ "<br>");
for (index = 0; index < TAILLETABLEAU; index++) {
    document.write(tab[index] + "<br>");
}

var valeur=parseInt(prompt("Saisir une valeur :"));
var position=parseInt(prompt("A quelle position voulez-vous l'afficher ?"));

//On enregistre la valeur saisi sur la position saisi
tab[position]=valeur;

//Permet d'afficher les valeurs de la position 0 à la dernière valeur du tableau+1
document.write(" Le nouveau contenu du tableau est : "+ "<br>");

for (index = 0; index < (TAILLETABLEAU+1); index++) {
    document.write(tab[index] + "<br>");
}

