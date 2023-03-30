function validateForm() {

    var nom = document.forms["Formulaire"]["nom"];
    var prenom = document.forms["Formulaire"]["prenom"];
    var email = document.forms["Formulaire"]["email"];
    var datedenaissance = document.forms["Formulaire"]["datedenaissance"];
    var sujet = document.forms["Formulaire"]["sujet"];
    var message = document.forms["Formulaire"]["message"];
    var res = true;
    var aujourdhui = new Date();

    if (nom.value == "") {
        document.getElementById('errornom').innerHTML = "Veuillez entrez un nom valide";
        nom.focus();
        res = false;
    } else {
        document.getElementById('errornom').innerHTML = "";
    }

    if (prenom.value == "") {
        document.getElementById('errorprenom').innerHTML = "Veuillez entrez un prenom valide";
        prenom.focus();
        res = false;
    } else {
        document.getElementById('errorprenom').innerHTML = "";
    }

    if (email.value == "") {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        res = false;
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        res = false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        res = false;
    }

    if ((datedenaissance.valueAsDate > aujourdhui) || (datedenaissance.valueAsDate == null)) {
        document.getElementById('errordatenaissance').innerHTML = "Veuillez entrez une date valide";
        datedenaissance.focus();
        res = false;
    } else {
        document.getElementById('errordatenaissance').innerHTML = "";
    }

    if (sujet.value == "") {
        document.getElementById('errorsujet').innerHTML = "Veuillez entrez un sujet valide";
        nom.focus();
        res = false;
    } else {
        document.getElementById('errorsujet').innerHTML = "";
    }

    if (message.value == "") {
        document.getElementById('errormsg').innerHTML = "Veuillez entrez un message valide";
        message.focus();
        res = false;
    } else {
        document.getElementById('errormsg').innerHTML = "";
    }

    return res;
}