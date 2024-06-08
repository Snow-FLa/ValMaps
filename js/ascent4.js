document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton3 = document.getElementById('showImageButton3');
    const imageContainer3 = document.getElementById('imageContainer3');

    showImageButton3.addEventListener('click', () => {
        if (imageContainer3.style.display === 'none') {
            imageContainer3.style.display = 'flex';
        } else {
            imageContainer3.style.display = 'none';
        }
    });
});
