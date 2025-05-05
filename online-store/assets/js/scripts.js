// This file contains JavaScript code for the online store website, including functionality for user login via Gmail and handling credit card payments.

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const paymentForm = document.getElementById('payment-form');

    // Function to handle Gmail login
    loginButton.addEventListener('click', function() {
        // Simulate Gmail login process
        const userEmail = prompt("Please enter your Gmail address:");
        if (userEmail) {
            alert("Logged in as: " + userEmail);
            // Proceed to products page or update UI accordingly
        } else {
            alert("Login cancelled.");
        }
    });

    // Function to handle credit card payment
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const cardNumber = document.getElementById('card-number').value;
            const cardExpiry = document.getElementById('card-expiry').value;
            const cardCVC = document.getElementById('card-cvc').value;

            // Simulate payment processing
            if (cardNumber && cardExpiry && cardCVC) {
                alert("Payment processed successfully!");
                // Redirect to confirmation page or update UI accordingly
            } else {
                alert("Please fill in all payment fields.");
            }
        });
    }

    const button = document.querySelector('.some-button-class'); // Replace with actual class or ID
    if (button) {
        button.addEventListener('click', function() {
            console.log('Button clicked!');
        });
    }
});