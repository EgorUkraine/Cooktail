let menu = document.querySelector('.menu')
let button_logo = document.querySelector('.logo')
menu.style.position="absolute"
menu.style.top="-300px"

let article = document.querySelectorAll("article")

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

for (let i=0; i<article.length;i+=1){
    article[i].addEventListener("mouseover", function(){
        anime({
            targets: article[i],
            scale:1.1,
            duration:500,
            easing: "linear"
        })
    })
}
for (let i=0; i<article.length;i+=1){
    article[i].addEventListener("mouseout", function(){
        anime({
            targets: article[i],
            scale:1,
            duration:500,
            easing: "linear"
        })
    })
}
