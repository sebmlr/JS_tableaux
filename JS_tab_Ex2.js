// constantes /
const TAILLETABLEAU = 10;
const MIN = 1;
const MAX = 10;

// declaration du tableau/
var tableauDemo = new Array();
var index = 0;
var valeurRecherchee = 0;
var posValeurRecherchee = 0;

//var nbFois = 0;
var valeurTrouvee = false;

// remplissage aléatoire du tableau
for (index = 0; index < TAILLETABLEAU; index++) {
    tableauDemo[index] = Math.floor((Math.random() * MAX) + MIN);
}
document.write(" Le contenu du tableau est : ");
for (index = 0; index < TAILLETABLEAU; index++) {
    document.write(tableauDemo[index] + "<br>");
}

// Saisie de la valeur à rechercher
valeurRecherchee = parseInt(prompt("Quelle valeur recherchez vous ?"));

// rechercher la valeur dans le tableau
for (index = 0; index < TAILLETABLEAU; index++) {

    if ((tableauDemo[index] == valeurRecherchee) && (valeurTrouvee == false)) {
        valeurTrouvee = true;
        posValeurRecherchee = index;

    }

}

if (valeurTrouvee == true) {
    document.write(" La valeur " + valeurRecherchee + " se trouve à la position " + posValeurRecherchee);
} else
    document.write("La valeur recherchée ne figure pas dans le tableau !");