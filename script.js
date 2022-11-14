const btn = document.getElementById('dark')
// const icon=document.getElementById('icon')
const cont = document.getElementsByClassName('container')
const cardCont = document.getElementsByClassName('cardContents')


btn.addEventListener('click', () => {
    cont[0].classList.toggle('dark')
    btn.classList.toggle('dark')
})