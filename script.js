



let bars = document.querySelector('.bars') ;

let closed = document.getElementById('close') ;

let nav= document.getElementById('nav') ;

bars.addEventListener('click',()=>{
   nav.style.left = '0' ;
   nav.style.transition = '.2s' ;
   nav.style.transitionTimingFunction = 'ease-in-out' ;
})

closed.addEventListener('click',()=>{
    nav.style.left = '-100%' ;
    nav.style.transition = '.2s' ;
    nav.style.transitionTimingFunction= 'ease-in-out' ;
 })