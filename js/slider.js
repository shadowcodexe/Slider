const upButton = document.querySelector('.up-button')

const downButton = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const mainslide = document.querySelector('.main-slide')

const slidesCount = mainslide.querySelectorAll('div').length

const container = document.querySelector('.container')

const height = container.clientHeight

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount -1) * 100}vh`

upButton.addEventListener('click', () => {

    changeSlide('up')

})

downButton.addEventListener('click', () => {

    changeSlide('down')

})

document.querySelector('body').addEventListener('keydown', (event) => {

    if (event.keyCode == 40) {
        
        changeSlide('down')

    }

})

document.querySelector('body').addEventListener('keydown', (event) => {

    if (event.keyCode == 38) {
        
        changeSlide('up')

    }

})

function changeSlide(direction) {

    if (direction === 'up') {

        activeSlideIndex++

        if (activeSlideIndex === slidesCount) {

            activeSlideIndex = 0

        }

    } else if (direction === 'down') {

        activeSlideIndex--

        if (activeSlideIndex < 0) {

            activeSlideIndex = slidesCount - 1

        }

    }

    mainslide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}