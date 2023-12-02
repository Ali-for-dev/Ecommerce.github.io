function validateName() {
    // Récupérez la valeur du champ nom du produit
    var name = $("#name").val();
    // Vérifiez si le nom du produit est vide ou pas
    if (name) {
        // Si non, retirez la classe error-border du champ nom du produit
        $("#name").removeClass("error-border");
        // Et cachez le message d'erreur du nom du produit
        $("#name-error").hide();
        // Retournez true pour indiquer que le nom du produit est valide
        return true;
    } else {
        // Si oui, ajoutez la classe error-border au champ nom du produit
        $("#name").addClass("error-border");
        // Et affichez le message d'erreur du nom du produit
        $("#name-error").text("Le nom du produit est obligatoire").show();
        // Retournez false pour indiquer que le nom du produit est invalide
        return false;
    }
}

// Définissez une fonction pour valider la description du produit
function validateDescription() {
    // Récupérez la valeur du champ description du produit
    var description = $("#description").val();
    // Vérifiez si la description du produit est vide ou pas
    if (description) {
        // Si non, retirez la classe error-border du champ description du produit
        $("#description").removeClass("error-border");
        // Et cachez le message d'erreur de la description du produit
        $("#description-error").hide();
        // Retournez true pour indiquer que la description du produit est valide
        return true;
    } else {
        // Si oui, ajoutez la classe error-border au champ description du produit
        $("#description").addClass("error-border");
        // Et affichez le message d'erreur de la description du produit
        $("#description-error").text("La description du produit est obligatoire").show();
        // Retournez false pour indiquer que la description du produit est invalide
        return false;
    }
}

// Définissez une fonction pour valider la photo du produit
function validatePhoto() {
    // Récupérez la valeur du champ photo du produit
    var photo = $("#photo").val();
    // Vérifiez si la photo du produit est vide ou pas
    if (photo) {
        // Si non, retirez la classe error-border du champ photo du produit
        $("#photo").removeClass("error-border");
        // Et cachez le message d'erreur de la photo du produit
        $("#photo-error").hide();
        // Retournez true pour indiquer que la photo du produit est valide
        return true;
    } else {
        // Si oui, ajoutez la classe error-border au champ photo du produit
        $("#photo").addClass("error-border");
        // Et affichez le message d'erreur de la photo du produit
        $("#photo-error").text("La photo du produit est obligatoire").show();
        // Retournez false pour indiquer que la photo du produit est invalide
        return false;
    }
}

// Définissez une fonction pour valider le stock du produit
function validateStock() {
    // Récupérez la valeur du champ stock du produit
    var stock = $("#stock").val();
    // Vérifiez si le stock du produit est vide ou pas
    if (stock) {
        // Si non, retirez la classe error-border du champ stock du produit
        $("#stock").removeClass("error-border");
        // Et cachez le message d'erreur du stock du produit
        $("#stock-error").hide();
        // Retournez true pour indiquer que le stock du produit est valide
        return true;
    } else {
        // Si oui, ajoutez la classe error-border au champ stock du produit
        $("#stock").addClass("error-border");
        // Et affichez le message d'erreur du stock du produit
        $("#stock-error").text("Le stock du produit est obligatoire").show();
        // Retournez false pour indiquer que le stock du produit est invalide
        return false;
    }
}

// Ajoutez un événement blur au champ nom du produit pour valider le nom du produit lorsque l'utilisateur quitte le champ
$("#name").blur(function() {
    validateName();
});

// Ajoutez un événement blur au champ description du produit pour valider la description du produit lorsque l'utilisateur quitte le champ
$("#description").blur(function() {
    validateDescription();
});

// Ajoutez un événement blur au champ photo du produit pour valider la photo du produit lorsque l'utilisateur quitte le champ
$("#photo").blur(function() {
    validatePhoto();
});

// Ajoutez un événement blur au champ stock du produit pour valider le stock du produit lorsque l'utilisateur quitte le champ
$("#stock").blur(function() {
    validateStock();
});

// Ajoutez un événement submit au formulaire pour valider tous les champs avant de l'envoyer
$("#product-form").submit(function(event) {
    // Empêchez le comportement par défaut du formulaire
    event.preventDefault();
    // Validez tous les champs en appelant les fonctions de validation
    var nameValid = validateName();
    var descriptionValid = validateDescription();
    var photoValid = validatePhoto();
    var stockValid = validateStock();
    // Vérifiez si tous les champs sont valides
    if (nameValid && descriptionValid && photoValid && stockValid) {
        // Si oui, envoyez le formulaire
        this.submit();
    } else {
        // Si non, affichez un message d'erreur général
        alert("Veuillez corriger les erreurs dans le formulaire avant de l'envoyer");
    }
});