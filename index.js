const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const cancelCross = document.querySelector('.cancel-cross');

menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')

});
cancelCross.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
})
