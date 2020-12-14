//Ecrire un programme qui affiche les valeurs mini et maxi contenues dans un tableau de 10 éléments rempli aléatoirement.

// constantes
const TAILLETABLEAU = 10;
const MIN = 1;
const MAX = 10;

// declaration du tableau/
var tableauDemo = new Array();
var index = 0;
var valeurMin = 0;
var valeurMax=0;

// remplissage aléatoire du tableau 
for (index = 0; index < TAILLETABLEAU; index++) {
    tableauDemo[index] = Math.floor((Math.random() * MAX) + MIN);
}

//recherches des valeurs min et max contenues dans le tableau
for (index)