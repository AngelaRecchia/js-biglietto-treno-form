var genera = document.getElementById("genera");
genera.addEventListener("click", function (){

    var name = document.getElementById("name").value;
    var km = document.getElementById("km").value;
    var eta = document.getElementById("eta").value;
    var costo = km * 0.21;

    document.getElementById("nomePass").innerHTML = name;

    if(eta == "minore") {
        document.getElementById("offerta").innerHTML = "Sconto Minorenne";
        document.getElementById("costo").innerHTML = (costo *= 0.8).toFixed(2) + "€";
    } else if (eta == "over65") {
        document.getElementById("offerta").innerHTML = "Sconto Over 65";
        document.getElementById("costo").innerHTML = (costo *= 0.6).toFixed(2) + "€";
    } else {
        document.getElementById("offerta").innerHTML = "Prezzo Intero";
        document.getElementById("costo").innerHTML = costo.toFixed(2) + "€";
    }

    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9 + 1);

    document.getElementById("codice").innerHTML = Math.floor(Math.random() * 10000 + 90000);

    document.getElementById("viewTicket").className += " show";
})