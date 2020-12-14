//Ecrire un programme qui affiche les valeurs mini et maxi contenues dans un tableau de 10 éléments rempli aléatoirement.

// constantes
const TAILLETABLEAU = 10;
const MIN = 1;
const MAX = 10;
// declaration du tableau/
var tableauDemo = new Array();
var index = 0;
var valeurRecherchee = 0;
var posValeurRecherchee;
var nbFois = 0;
var valeurTrouvee = false;
// remplissage aléatoire du tableau 
for (index = 0; index < TAILLETABLEAU; index++) {
    tableauDemo[index] = Math.floor((Math.random() * MAX) + MIN);
}
document.write(" Le contenu du tableau est : ");
for (index = 0; index < TAILLETABLEAU; index++) {
    document.write(tableauDemo[index] + " ");
}
// Saisie de la valeur à rechercher 
valeurRecherchee = parseInt(prompt("Quelle valeur recherchez vous ?"));
// rechercher la valeur dans le tableau 
for (index = 0; index < TAILLETABLEAU; index++) {

    if ((tableauDemo[index] == valeurRecherchee)) {
        nbFois++;
        posValeurRecherchee = posValeurRecherchee + " " + index;
    }
}
if (nbFois > 0) {

    document.write(" La valeur " + valeurRecherchee + " a été trouvée  " + nbFois + "<br/>");
    document.write("Aux positions suivantes : " + posValeurRecherchee);
} else
    document.write("La valeur recherchée ne figure pas dans le tableau !");