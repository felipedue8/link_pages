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

document.addEventListener("DOMContentLoaded", function(){
    
    var dropbtn = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");
    dropbtn.addEventListener("click", function(){
      dropdownContent.classList.toggle("show");
    });

    var dropbtn2 = document.querySelector(".dropbtn2");
    var dropdownContent2 = document.querySelector(".dropdown-content2");
    dropbtn2.addEventListener("click", function(){
      dropdownContent2.classList.toggle("show");
    });

  });
