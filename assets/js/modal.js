document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementsByClassName('close')[0];

    // Загружаем данные из HTML-файла
    fetch('modals.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const modalsContainer = doc.getElementById('modals-container');
            const modals = modalsContainer.getElementsByClassName('modal-content');

            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    const modalId = card.getAttribute('data-id');
                    const modalData = [...modals].find(m => m.getAttribute('data-id') === modalId);

                    if (modalData) {
                        modalTitle.innerHTML = modalData.querySelector('h3').innerHTML;
                        modalImage.src = modalData.querySelector('img').src;
                        modalDescription.innerHTML = modalData.querySelector('.modal-text').innerHTML;

                        if (document.body.classList.contains('dark-mode')) {
                            modal.classList.add('dark-mode');
                        } else {
                            modal.classList.remove('dark-mode');
                        }

                        modal.style.display = 'block';
                    }
                });
            });
        });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});






