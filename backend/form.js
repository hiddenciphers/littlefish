document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const btnsCloseModal = document.querySelectorAll('.btn--close-modal');
    const overlay = document.querySelector('.overlay');
    const form = document.querySelector('.modal__form');
    const confirmationModal = document.querySelector('.confirmation');

    const closeModal = function () {
        window.location.href = '../index.html';
    };

    overlay.addEventListener('click', closeModal);
    btnsCloseModal.forEach(btn => btn.addEventListener('click', closeModal));

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Get form values
            const firstName = document.getElementById('given-name').value;
            const lastName = document.getElementById('family-name').value;
            const email = document.getElementById('email').value;
            const enquiryType = [...document.querySelectorAll('input[name="enquiry-type"]:checked')].map(e => e.value);

            const API_BASE_URL = window.location.hostname === 'localhost' 
                ? 'http://localhost:3001' // Local production
                : 'https://api.yourdomain.com'; // Change this to url that points to backend/server/index.js for deployment

            // Send form data to API
            try {
                const response = await fetch(`${API_BASE_URL}/send-email`, { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, email, enquiryType })
                });                

                const data = await response.json();
                if (data.success) {
                    // Hide form modal
                    modal.classList.add('hidden');
                    // Show confirmation modal
                    if (confirmationModal) {
                        confirmationModal.classList.remove('hidden');
                        confirmationModal.removeAttribute('inert');
                    }
                } else {
                    alert('Failed to send email. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error sending email. Please try again.');
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.location.href = '../index.html';
        }
    });
});
