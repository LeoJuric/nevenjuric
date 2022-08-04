const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.primary-navigation');

nav.style.display = "none";

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
});


document.querySelector('.hamburger').onclick = dropdown
function dropdown() {
    if (nav.style.display == 'none') {
        nav.style.display = 'block'
    }
    else {
        nav.style.display = 'none'
    }
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
})

sr.reveal('#about1')
sr.reveal('#about2')
sr.reveal('#ar2h1', {origin: 'left'})
sr.reveal('#ar2p', {origin: 'left'})
sr.reveal('#ar2ul', {origin: 'left'})
sr.reveal('#ar2if', {origin: 'right'})
sr.reveal('#h1h1')
sr.reveal('#prvi', {origin: 'left'})
sr.reveal('#drugi', {origin: 'right'})
sr.reveal('#left', {origin: 'left'})
sr.reveal('#right', {origin: 'right'})

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


const emailbtn = document.querySelector('#emailbtn')
emailbtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#upit')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

const gumb2 = document.getElementById("button1")
gumb2.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

