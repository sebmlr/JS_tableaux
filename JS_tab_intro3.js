//3 Afficher les éléments par ordre décroissant

var lesJoursDeLaSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

for (var index = lesJoursDeLaSemaine.length-1; index >= 0; index--) {
    document.write((lesJoursDeLaSemaine[index]), "<br>");
}
document.write("<br>");