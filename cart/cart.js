function validateCardNumber() {
    console.log("checking");
    var cardnumber = $("#cardnumber").val();
    var regex = /^\d{16}$/;
    if (regex.test(cardnumber)) {
        $("#cardnumber").removeClass("error-border");
        $("#email-error").hide();
        return true;
    } else {
        $("#cardnumber").addClass("error-border");
        $("#email-error").text("le numero de carte doit contenir 16 chiffres").show();
        return false;
    }
}

function validateNameOnCard() {
    console.log("checking");
    var name = $("#nameoncard").val();
    var regex = /^[A-Z]+$/;
    if (regex.test(name)) {
        $("#nameoncard").removeClass("error-border");
        $("#name-error").hide();
        return true;
    } else {
        $("#nameoncard").addClass("error-border");
        $("#name-error").text("Le nom doit contenir que des lettres majuscule").show();
        return false;
    }
}

function validateExpiration() {
    console.log("checking");
    var name = $("#exp").val();
    var regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (regex.test(name)) {
        $("#exp").removeClass("error-border");
        $("#exp-error").hide();
        return true;
    } else {
        $("#exp").addClass("error-border");
        $("#exp-error").text("la date n'est pas valide").show();
        return false;
    }
}

function validateCvv() {
    console.log("checking");
    var name = $("#cvv").val();
    var regex = /^\d{3}$/;
    if (regex.test(name)) {
        $("#cvv").removeClass("error-border");
        $("#cvv-error").hide();
        return true;
    } else {
        $("#cvv").addClass("error-border");
        $("#cvv-error").text("il faut 3 chiffres").show();
        return false;
    }
}

$("#cardnumber").blur(function() {
    validateCardNumber();
});

$("#nameoncard").blur(function() {
    validateNameOnCard() ;
});

$("#exp").blur(function() {
    validateExpiration() ;
});

$("#cvv").blur(function() {
    validateCvv() ;
});

$("#cardinfo").submit(function(event) {
    // Empêchez le comportement par défaut du formulaireevent.preventDefault();
    event.preventDefault();
    var cardinfo = validateCardNumber();
    var nameoncard = validateNameOnCard();
    var exp=validateExpiration();
    var cvv=validateCvv() ;
    if (cardinfo && nameoncard && exp && cvv) {
        this.submit();
    } else {
        // Si non, affichez un message d'erreur général
        alert("Veuillez corriger les erreurs dans le formulaire avant de l'envoyer");
    }
});