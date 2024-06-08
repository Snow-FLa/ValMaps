document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton2 = document.getElementById('showImageButton2');
    const imageContainer2 = document.getElementById('imageContainer2');

    showImageButton2.addEventListener('click', () => {
        if (imageContainer2.style.display === 'none') {
            imageContainer2.style.display = 'flex';
        } else {
            imageContainer2.style.display = 'none';
        }
    });
});
