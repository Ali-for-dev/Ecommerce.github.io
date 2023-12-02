// Définissez une fonction pour valider le nom
function validateName() {
    var name = $("#name").val();
    var regex = /^[A-Za-z]+$/;
    if (regex.test(name)) {
        $("#name").removeClass("error-border");
        $("#name-error").hide();
        return true;
    } else {
        $("#name").addClass("error-border");
        $("#name-error").text("Le nom doit contenir que des lettres").show();
        return false;
    }
}

// Définissez une fonction pour valider l'email
function validateEmail() {
    var email = $("#email").val();
    var regex = /^[a-zA-Z]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
        $("#email").removeClass("error-border");
        $("#email-error").hide();
        return true;
    } else {
        $("#email").addClass("error-border");
        $("#email-error").text("L'email doit être au format correct").show();
        return false;
    }
}

// Définissez une fonction pour valider le mot de passe
function validatePassword() {
     var password = $("#pass").val();
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*-_#?&])[A-Za-z\d@$-_!%*#?&]{8,}$/;
    if (regex.test(password)) {
        $("#pass").removeClass("error-border");
        $("#pass-error").hide();
        return true;
    } else {
        $("#pass").addClass("error-border");
        $("#pass-error").text("Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre et un caractère spécial").show();
        return false;
    }
}

// Définissez une fonction pour valider la confirmation du mot de passe
function validateConfirmPassword() {
    var password = $("#pass").val();
    var confirmPassword = $("#re_pass").val();
    if (password === confirmPassword) {
        $("#re_pass").removeClass("error-border");
        $("#re-pass-error").hide();
        return true;
    } else {
        $("#re_pass").addClass("error-border");
        $("#re-pass-error").text("Le mot de passe et la confirmation du mot de passe doivent être identiques").show();
        return false;
    }
}

// Ajoutez un événement blur au champ nom pour valider le nom lorsque l'utilisateur quitte le champ
$("#name").blur(function() {
    validateName();
});

// Ajoutez un événement blur au champ email pour valider l'email lorsque l'utilisateur quitte le champ
$("#email").blur(function() {
    validateEmail();
});

// Ajoutez un événement blur au champ mot de passe pour valider le mot de passe lorsque l'utilisateur quitte le champ
$("#pass").blur(function() {
    validatePassword();
});

// Ajoutez un événement blur au champ confirmation du mot de passe pour valider la confirmation du mot de passe lorsque l'utilisateur quitte le champ
$("#re_pass").blur(function() {
    validateConfirmPassword();
});

// Ajoutez un événement submit au formulaire pour valider tous les champs avant de l'envoyer
$("#register-form").submit(function(event) {
    // Empêchez le comportement par défaut du formulaire
    event.preventDefault();
    var nameValid = validateName();
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    var confirmPasswordValid = validateConfirmPassword();
    if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
        this.submit();
    } else {
        // Si non, affichez un message d'erreur général
        alert("Veuillez corriger les erreurs dans le formulaire avant de l'envoyer");
    }
});

// Définissez une fonction pour valider le nom
function validateLoginPassword() {
    var password = $("#your_pass").val();
   var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*-_#?&])[A-Za-z\d@$-_!%*#?&]{8,}$/;
   if (regex.test(password)) {
       $("#your_pass").removeClass("error-border");
       $("#pass-error").hide();
       return true;
   } else {
       $("#your_pass").addClass("error-border");
       $("#pass-error").text("Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre et un caractère spécial").show();
       return false;
   }
}

// Ajoutez un événement blur au champ nom pour valider le nom lorsque l'utilisateur quitte le champ
$("#your_pass").blur(function() {
    validateLoginPassword();
});

$("#login-form").submit(function(event) {
    event.preventDefault();
    var passwordValid = validateLoginPassword();
    if (passwordValid) {
        this.submit();
    } else {
        // Si non, affichez un message d'erreur général
        alert("Veuillez corriger les erreurs dans le formulaire avant de l'envoyer");
    }
});