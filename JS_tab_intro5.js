//Ecrire un programme qui remplit un tableau de 6 nombres compris entre 1 et 49 de manière aléatoire puis qui affiche le contenu du tableau.


const TAILLETABLEAU = 6;
const MIN = 1;
const MAX = 49;

var tab=[];
var index=0;

for (index = 0; index < TAILLETABLEAU; index++) {
    tab[index] = Math.floor((Math.random() * MAX) + MIN);
}
document.write(" Le contenu du tableau est : "+ "<br>");
for (index = 0; index < TAILLETABLEAU; index++) {
    document.write(tab[index] + "<br>");
}

