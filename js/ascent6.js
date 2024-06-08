document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton5 = document.getElementById('showImageButton5');
    const imageContainer5 = document.getElementById('imageContainer5');

    showImageButton5.addEventListener('click', () => {
        if (imageContainer5.style.display === 'none') {
            imageContainer5.style.display = 'flex';
        } else {
            imageContainer5.style.display = 'none';
        }
    });
});
