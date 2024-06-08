document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton6 = document.getElementById('showImageButton6');
    const imageContainer6 = document.getElementById('imageContainer6');

    showImageButton6.addEventListener('click', () => {
        if (imageContainer6.style.display === 'none') {
            imageContainer6.style.display = 'flex';
        } else {
            imageContainer6.style.display = 'none';
        }
    });
});

var myVideo = document.getElementById("videoo"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 