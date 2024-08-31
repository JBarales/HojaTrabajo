document.addEventListener('DOMContentLoaded', function() {

    const names = ["Carlos", "María", "Juan", "Sofía", "Pedro", "Ana", "Luis", "Laura", "José", "Elena"];
    const comments = [
        "¡Excelente servicio el restaurante!",
        "Me encantó la atención.",
        "Recomiendo este lugar a todos.",
        "Muy satisfecho con el producto.",
        "La experiencia fue inolvidable.",
        "Volvería sin duda alguna.",
        "Gracias por la amabilidad.",
        "Un lugar muy acogedor.",
        "El personal es muy atento.",
        "El ambiente es perfecto para relajarse."
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(names);
    shuffle(comments);
    const selectedNames = names.slice(0, 3);
    const selectedComments = comments.slice(0, 3);

    const commentsContainer = document.getElementById('commentsContainer');
    selectedNames.forEach((name, index) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}:</strong> ${selectedComments[index]}`;
        commentsContainer.appendChild(commentElement);
    });


    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === "" || birthdate === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        console.log("Nombre:", name);
        console.log("Fecha de Nacimiento:", birthdate);
        console.log("Correo Electrónico:", email);
        console.log("Mensaje:", message);

        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();

        contactForm.reset();
    });
});