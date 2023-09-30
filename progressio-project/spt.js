// script.js
document.addEventListener('DOMContentLoaded', function () {
    const donationForm = document.getElementById('donation-form');
    const amountInput = document.getElementById('amount');

    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const amount = parseFloat(amountInput.value);

        if (!isNaN(amount) && amount > 0) {
            alert(`Thank you for donating $${amount.toFixed(2)}`);
            // Here, you can add code to process the payment.
        } else {
            alert('Please enter a valid donation amount.');
        }
    });
});
