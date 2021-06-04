var genera = document.getElementById("genera");
genera.addEventListener("click", function (){

    var name = document.getElementById("name").value;
    var km = document.getElementById("km").value;
    var eta = document.getElementById("eta").value;
    var costo = km * 0.21;

    if (name.toUpperCase() == name.toLowerCase() || costo < 0 || costo == "" || isNaN(costo)) {
        alert("Inserire i dati obbligatori correttamente");
    } else {

        document.getElementById("nomePass").innerHTML = name;

        var offerta = document.getElementById("offerta");
        
        if(eta == "minore") {
            offerta.innerHTML = "Sconto Minorenne";
            costo *= 0.8;
        } else if (eta == "over65") {
            offerta.innerHTML = "Sconto Over65";
            costo *= 0.6;
        } else {
            offerta.innerHTML = "Prezzo Intero";
        }

        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9 + 1);

        document.getElementById("codice").innerHTML = Math.floor(Math.random() * 10000 + 90000);

        document.getElementById("costo").innerHTML = costo.toFixed(2) + "€";

        document.getElementById("viewTicket").className += " show";
    }
})

var annulla = document.getElementById("annulla");
annulla.addEventListener("click", function (){
    document.getElementById("buyData").reset();
    document.getElementById("viewTicket").classList.replace("show", "hidden");
})