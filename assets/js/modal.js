document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementsByClassName('close')[0];

    // Загружаем данные из JSON-файла
    fetch('modal-content.json')
        .then(response => response.json())
        .then(data => {
            const modals = data.modals;

            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                card.addEventListener('click', function() {
                    const modalData = modals[index];

                    modalImage.src = modalData.image;
                    modalTitle.textContent = modalData.title;
                    modalDescription.innerHTML = modalData.description;

                    if (document.body.classList.contains('dark-mode')) {
                        modal.classList.add('dark-mode');
                    } else {
                        modal.classList.remove('dark-mode');
                    }

                    modal.style.display = 'block';
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





