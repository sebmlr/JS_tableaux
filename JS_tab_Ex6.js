//Ecrire un programme qui permet de supprimer une valeur à une position donnée, le programme affiche le contenudu tableau avant et après l’ajout.
const TAILLETABLEAU = 6;
const MIN = 1;
const MAX = 49;

var tab=[];
var index=0;

for (index = 0; index < TAILLETABLEAU; index++) {
    tab[index] = Math.floor((Math.random() * MAX) + MIN);
}

document.write(" Le contenu initial du tableau est : "+ "<br>");
for (index = 0; index < TAILLETABLEAU; index++) {
    document.write(tab[index] + "<br>");
}


var position=parseInt(prompt("Quelle position voulez-vous supprimer ?"));

//Permet d'afficher les valeurs de la position 0 à la position supprimée-1
document.write(" Le nouveau contenu du tableau est : "+ "<br>");
for (index = 0; index < position-1; index++) {
    document.write(tab[index] + "<br>");
}

//Permet d'afficher les valeurs aprés la position supprimée jusqu'à la dernière valeur du tableau
for (index = position-1; index < TAILLETABLEAU; index++) {
    document.write(tab[index] + "<br>");
}