const image = document.getElementById('hovemage');
const originalimage = 'iphone14pro(1).jpg';
const hoverimage = 'iphone14pro(2).jpg';

image.addEventListener('mouseover', function () {
    console.log('Mouse over event triggered'); 
    image.src = hoverimage;
});

image.addEventListener('mouseout', function () {
    console.log('Mouse out event triggered'); 
    image.src = originalimage;
});
