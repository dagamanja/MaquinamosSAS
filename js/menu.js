const menu = document.querySelector('.menu-boton')
const navegacion = document.querySelector('.navegacion')

// console.log(navegacion)
// console.log(menu)

menu.addEventListener('click', () => {
    // alert("click")
    navegacion.classList.toggle('spread')
})

window.addEventListener('click', e => {
    if (navegacion.classList.contains('spread') && 
    e.target != menu && e.target != navegacion) {
        // alert("click")
        navegacion.classList.toggle("spread")
    }
})