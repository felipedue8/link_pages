window.addEventListener('resize', function() {
    var video = document.getElementById('videofondo');
    var aspectRatio = video.videoWidth / video.videoHeight;
    var screenHeight = window.innerHeight;
    var screenWidth = screenHeight * aspectRatio;
    
    if (screenWidth < window.innerWidth) {
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        video.style.width = 'auto';
        video.style.height = '100%';
    }
});
window.dispatchEvent(new Event('resize')); // Ejecuta el evento resize al cargar la página