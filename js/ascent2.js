document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton1 = document.getElementById('showImageButton1');
    const imageContainer1 = document.getElementById('imageContainer1');

    showImageButton1.addEventListener('click', () => {
        if (imageContainer1.style.display === 'none') {
            imageContainer1.style.display = 'flex';
        } else {
            imageContainer1.style.display = 'none';
        }
    });
});
