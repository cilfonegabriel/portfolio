const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const cancelCross = document.querySelector('.cancel-cross');
const linkPortfolio = document.querySelector('.menu-link');
const linkAbout = document.querySelector('.menu-link');
const linkContact = document.querySelector('.menu-link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('hidden')
    headerNavMobile.classList.remove('hidden')
});

cancelCross.addEventListener('click', () => {
    menuBtn.classList.remove('hidden')
    headerNavMobile.classList.add('hidden')
});

linkPortfolio.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  });
  
  linkAbout.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  });
  
  linkContact.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  });
  
