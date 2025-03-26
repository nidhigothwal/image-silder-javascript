let currectIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

function showSlider(index) {
    if (index >= totalSlides) {
        currectIndex = 0
    } else if (index < 0) {
        currectIndex = totalSlides - 1
    } else {
        currectIndex = index
    }
    document.querySelector('.slider').style.transform = `translateX(-` + (currectIndex * 100) + `%)`
}

function nextSlider() {
    console.log('click on next slider....')
    showSlider(currectIndex + 1)
}

function prevSlider() {
    console.log('click on previous slider...')
    showSlider(currectIndex - 1)
}