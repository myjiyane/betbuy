document.getElementById('splashForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const cellphone = document.getElementById('cellphone').value;

    // Optionally, send data to your server or database here

    // Redirect to e-commerce site if terms are accepted
    if (document.getElementById('terms').checked) {
        window.location.href = 'https://your-ecommerce-site.com'; // Replace with your actual e-commerce URL
    }
});