document.addEventListener('DOMContentLoaded', () => {

    
    const modal = document.querySelector('.modal');
    const btnsCloseModal = document.querySelectorAll('.btn--close-modal');
    const overlay = document.querySelector('.overlay');
    const form = document.querySelector('.modal__form');
    const confirmationModal = document.querySelector('.confirmation');

    const closeModal = function () {
        // Navigate back to home page
        window.location.href = '../index.html';
    };

    overlay.addEventListener('click', closeModal);

    // Add event listeners to close modals
    btnsCloseModal.forEach(btn => btn.addEventListener('click', closeModal));
      
    // Handle form submission on contact page
    if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          
          modal.classList.add('hidden');
          // Show confirmation modal
          if (confirmationModal) {
            confirmationModal.classList.remove('hidden');
            confirmationModal.removeAttribute('inert');
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        console.log(`Keypress: ${e.key}`);
        // Close modal on 'Escape' key if any modal is open
        if (e.key === 'Escape') {
            window.location.href = '../index.html';
        }
    });
    
    
});