document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton4 = document.getElementById('showImageButton4');
    const imageContainer4 = document.getElementById('imageContainer4');

    showImageButton4.addEventListener('click', () => {
        if (imageContainer4.style.display === 'none') {
            imageContainer4.style.display = 'flex';
        } else {
            imageContainer4.style.display = 'none';
        }
    });
});
