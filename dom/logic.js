const lastprgclickThis = document.getElementById('lastprg')
lastprgclickThis.addEventListener('click', (event) => {
    document.body.style.backgroundColor = 'red'
})

const colorpicker = document.getElementById('colorpicker')
colorpicker.addEventListener('change', (event) => {
    document.body.style.backgroundColor = colorpicker.value
})

const toogleImage = document.getElementById('toogle-img')
const carImg = document.getElementById('logo')
toogleImage.addEventListener('click', (e) => {
    if (carImg.style.display === 'none') {
        carImg.style.display = 'unset'
    } else {
        carImg.style.display = 'none'
    }
})

const carousel = document.getElementById('carousel')
fetch('https://api-football-standings.azharimm.site/leagues')
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            const carouselItem = document.createElement('img')
            carouselItem.classList.add('img-code')
            if (i % 2 != 0) {
                carouselItem.classList.add('opacity')
            }
            carouselItem.src = data.data[i].logos.light
            carousel.appendChild(carouselItem)
        }
    })

const scrollLeft = document.getElementById('scroll-left')
const scrollRight = document.getElementById('scroll-right')
const carouselItem = document.getElementsByClassName('img-code')[0]
scrollRight.addEventListener('click', (e) => {
    carousel.scrollBy({
        left: -carouselItem.clientWidth,
        top: 0,
        behavior: 'smooth',
    })
})
scrollLeft.addEventListener('click', (e) => {
    carousel.scrollBy({
        left: carouselItem.clientWidth,
        top: 0,
        behavior: 'smooth',
    })
})
