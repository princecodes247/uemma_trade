
//Variables
let timerId;
 let gradients = [
   "linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%)",
   "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
   "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
   "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
   "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
   "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
   "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
   "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
   ]
   
let isMenuOpen = false

const main = document.querySelector('main');
const header = document.querySelector('header');
const ham = document.querySelector('.ham');
const menu = document.querySelector('#menu');
const body = document.querySelector('.body-cover');
const border = document.querySelector('#menu .user-info .userpic-ctr .circle-grad')


function menuClose(event){
  event.stopPropagation()
  body.classList.remove('noscroll');
  ham.classList.add('ham-norm');
  ham.classList.remove('click')
  isMenuOpen = false;
  menu.style.right = "-70%";
  //menu.classList.add('slideOut');
  
  menu.style.pointerEvents = 'none'
  header.classList.toggle('cheader')
  clearTimeout(timerColor)
  
}
function menuOpen(event) {
    event.stopPropagation()
    ham.classList.add('click')
    body.classList.add('noscroll');
    console.log('ran');
    ham.classList.remove('ham-norm')
    isMenuOpen = !isMenuOpen
    header.classList.toggle('cheader')
    menu.style.right = "0";
    //menu.classList.add('slideIn');
    menu.style.pointerEvents = 'auto'
    timerColor = setInterval (() => {
      let a = Math.floor(Math.random()*gradients.length)
      border.style.background = gradients[a];
    
    }
      ,1000)
}

//Event listeners
ham.addEventListener('click', function ham(event) {
  event.stopPropagation()
  if (isMenuOpen) {
    menuClose(event)
  } else if (!isMenuOpen) {
    menuOpen(event)
    setTimeout(main.addEventListener('click', function ram(){
      menuClose(event)
      main.removeEventListener('click', ram)
    }
    ), 500)
  
}

})