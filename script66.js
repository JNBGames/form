document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    if (name === "") {
        nameError.textContent = "Por favor, preencha o campo Nome.";
        document.getElementById("name").style.borderColor = "red";
    }
    if (email === "") {
        emailError.textContent = "Por favor, preencha o campo Email.";
        document.getElementById("email").style.borderColor = "red";
    }
    if (message === "") {
        messageError.textContent = "Por favor, preencha o campo Mensagem.";
        document.getElementById("message").style.borderColor = "red";
    }
    if (name !== "" && email !== "" && message !== "") {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contactForm").reset();
    }
});
