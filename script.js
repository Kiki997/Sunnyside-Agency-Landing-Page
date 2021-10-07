// SHow hide Mobile nav//////////////////////////////////
const btnNav= document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.toggle');

//what toggle does is it checks the class list
//if it contains nav-open it removes it if it doesnt
//then it adds it to it
btnNav.addEventListener('click' , function(){
    header.classList.toggle('mobile-nav')
}) ;
