let menu = document.querySelector('.menu')
let button_logo = document.querySelector('.logo')
menu.style.position="absolute"
menu.style.top="-300px"

button_logo.addEventListener("click", function(){
    anime({
        targets: '.menu',   
        translateY: 400,
        duration: 1000,
        easing: 'linear'
    }).finished.then(function(){
        anime({
            targets: ".menu",
            translateY: -300,
            duration: 1000,
            easing: "easeInQuad",
            delay: 4000,
        })
})
})
