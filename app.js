const progressBar = document.querySelector('#progress-bar')

const section = document.querySelector('section')


const animateProgressBar = () => {
    let scrollMouse = -section.getBoundingClientRect().top;

    let progressWidth = (scrollMouse / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100 ;
    
    let value = Math.floor(progressWidth)
    console.log(value)

    progressBar.style.width = value + "%" // 33%

    if( value < 0 ) {
        progressBar.style.width = '0%'
    }
}

window.addEventListener('scroll', animateProgressBar)
animateProgressBar()