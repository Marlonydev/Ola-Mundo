function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

function submitForm() {
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').innerText = 'Obrigado pelo contato, ' + name + '! Sua mensagem foi enviada com sucesso.';
        form.reset();
    } else {
        document.getElementById('form-message').innerText = 'Por favor, preencha todos os campos.';
    }
}
