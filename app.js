// movement animation

const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

// Moving animation
container.addEventListener('mousemove', e=>{
   let xAxis = (window.innerWidth/2 - e.pageX)/25;
   let yAxis = (window.innerHeight/2 - e.pageY)/25;
   card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

// Animate in
container.addEventListener('mouseenter', e =>{
    card.style.transition= "none"

    // popup effect
    title.style.transform = "translateZ(150px)"
    sneaker.style.transform = "translateZ(150px) rotate(-45deg)"
    description.style.transform = "translateZ(150px)"
})

// Animate out
container.addEventListener('mouseleave', e => {
    card.style.transition= "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    // popup effect
    title.style.transform = "translateZ(0px)"
    sneaker.style.transform = "translateZ(0px) rotate(0deg)"
})