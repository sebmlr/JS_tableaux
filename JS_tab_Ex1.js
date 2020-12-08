var Tab = []
var i

for (i = 0; i<10; i++) {
    Tab[i] = Math.floor(Math.random() * (1, 100));
}

for (i = 0; i < Tab.length; i++) {
    document.write("La valeur i = ", i, " est ", Tab[i], "<br/>");
}