document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton = document.getElementById('showImageButton');
    const imageContainer = document.getElementById('imageContainer');

    showImageButton.addEventListener('click', () => {
        if (imageContainer.style.display === 'none') {
            imageContainer.style.display = 'flex';
        } else {
            imageContainer.style.display = 'none';
        }
    });
});

