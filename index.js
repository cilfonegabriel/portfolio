const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');

menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')
    //headerNavMobile.classList.add('hidden');
    //console.log(menuBtn);
    //console.log(menuNewVar);
});
