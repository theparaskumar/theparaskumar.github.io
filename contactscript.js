var formData = {
    form_firstName: document.getElementById("first-name").nodeValue,
    form_lastName: document.getElementById("last-name").nodeValue,
    form_email: document.getElementById("email").nodeValue,
    form_message: document.getElementById("message").nodeValue
}

window.onload = function(e) {
    e.preventDefault();
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_7t4x2sb', 'template_oirh8kk', formData )
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}