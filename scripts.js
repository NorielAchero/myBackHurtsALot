document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value,
        note: document.getElementById('note').value,
        branch: document.getElementById('branch').value
    };
    console.log('AY GUMANA1')
    // Prepare the email details
    const templateParams = {
        from_name: formData.firstName + " " + formData.lastName,
        to_name: formData.branch,
        message: `Customer: ${formData.firstName} ${formData.lastName}\nAddress: ${formData.address}, ${formData.city}\nContact: ${formData.contact}\nEmail: ${formData.email}\nNote: ${formData.note}`

    };
    console.log('AY GUMANA2')

    // Send the email
    emailjs.send('service_qupkvs8', 'template_fx9fhah', templateParams)
        .then(function(response) {
            alert('Order submitted successfully!');
        }, function(error) {
            alert('Failed to send order, please try again later.');
        });
});
