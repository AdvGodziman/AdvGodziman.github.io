// Set up Stripe.js with your publishable key.
const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// Create an instance of Elements.
const elements = stripe.elements();

// Create an instance of the card Element.
const card = elements.create('card');

// Add an instance of the card Element into the card-element div.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
    const displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

// Handle form submission.
const form = document.getElementById('payment-form');
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const { token, error } = await stripe.createToken(card);

    if (error) {
        // Inform the user if there was an error.
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
    } else {
        // Send the token to your server to charge the user.
        // You should replace this with your server-side code.
        fetch('/charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token.id,
                amount: document.getElementById('amount').value * 100, // Amount in cents
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
            }),
        })
        .then(response => response.json())        
        .then(data => {
            if (data.success) {
                // Payment successful, display a success message.
                alert('Payment successful!');
            } else {
                // Payment failed, display an error message.
                alert('Payment failed. Please try again.');
            }
        });
    }
});
