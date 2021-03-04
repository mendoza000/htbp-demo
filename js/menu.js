let menuToggle = document.querySelector('.toggle-menu')
let menuToggleIcon = document.querySelector('.toggle-menu i')
let menu = document.querySelector('nav')

menuToggle.addEventListener('click', e=>{
	menu.classList.toggle('show');
})
