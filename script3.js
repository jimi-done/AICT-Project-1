const image = document.getElementById('hoverImage');
const originalimage = 'iphone12(1).jpg';
const hoverimage = 'iphone12(2).jpg';

image.addEventListener('mouseover', function () {
    console.log('Mouse over event triggered');
    image.src = hoverimage;
});

image.addEventListener('mouseout', function () {
    console.log('Mouse out event triggered');
    image.src = originalimage;
});
