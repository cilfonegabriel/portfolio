import defaultExport from './popUp.js';

const showPopUp = defaultExport;

const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const cancelCross = document.querySelector('.cancel-cross');
const linkSection = document.querySelector('.menu-link');
const arrayBtnPopup = document.querySelectorAll('.theButton');

menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')

});
cancelCross.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
})

linkSection.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')
});

//esto solo es para buscar el objeto y ver si esta
const cardGrid = document.querySelector('.cardGrid')

const projects = [
    {
    imagen : '()',
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:["Ruby on rails", "css","JavaScript","html"],
    },
    {
    imagen : '()',
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:["Ruby on rails", "css","JavaScript","html"],
    },
    {
    imagen : '()',
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:["Ruby on rails", "css","JavaScript","html"],
    },
    {
      imagen : '()',
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:["Ruby on rails", "css","JavaScript","html"],
    },
    {
    imagen : '()',
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:["Ruby on rails", "css","JavaScript","html"],
    },
    {
    imagen : '()',
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:["Ruby on rails", "css","JavaScript","html"],
    },
];

const projectsCards = document.getElementById('projects-card');


function displayProject(projectId) {
    projectsCards.innerHTML += `
      <section class="other">
          <section class="informationCard">
              <h3 class="subTitle">
                ${projects[projectId].titulo}
              </h3> 
              <ul class = "cardTag">
                  <li>${projects[projectId].tecnologias[0]}</li>
                  <li>${projects[projectId].tecnologias[1]}</li>
                  <li>${projects[projectId].tecnologias[2]}</li>
                  <li>${projects[projectId].tecnologias[3]}</li>
              </ul>
              <button type="button" class="theButton">See Project</button>
          </section>
      </section>
    `;
}

for (let i = 0; i < projects.length; i++) {
  displayProject(i);
}

// // add eventListener to each project's button to fire the popUp after click.
const projectsBtn = document.querySelectorAll('.theButton');

for (let i = 0; i < projectsBtn.length; i += 1) {
  projectsBtn[i].addEventListener('click', () => {
    showPopUp(i);
  });
}
