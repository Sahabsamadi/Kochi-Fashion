const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Capture form data
    const formData = new FormData(form);

    // Convert to JSON
    const orderData = {};
    formData.forEach((value, key) => {
        orderData[key] = value;
    });

    // Send data to the server (example using Fetch API)
    fetch('submit_order.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Order submitted:', data);
        alert('Thank you! Your order has been received.');
    })
    .catch(error => {
        console.error('Error submitting order:', error);
        alert('There was an error submitting your order. Please try again.');
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // Close other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('open');
        });

        // Toggle the clicked FAQ item
        faqItem.classList.toggle('open');
    });
});
