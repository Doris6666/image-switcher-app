const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg'
];
let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

function updateImage() {
    mainImage.src = images[currentIndex];
}

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
