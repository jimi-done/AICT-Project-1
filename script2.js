
const image = document.getElementById('hoverImage');
const originalimage= 'iphonese1.png';
const hoverimage='iphonese2.jpg';


image.addEventListener('mouseover',  function (){
    image.src = hoverimage; 
});

image.addEventListener('mouseout',  function() {
    image.src = originalimage; 
});


