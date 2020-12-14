//4 : remplacer le dernier élément du tableau par "sunday" et afficher le tableau.

var lesJoursDeLaSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

lesJoursDeLaSemaine[6] = "sunday";

for (index=0;index<7;index++) {
    document.write(lesJoursDeLaSemaine[index]+"<br/>")
}