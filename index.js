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
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:["Ruby on rails", "css","JavaScript","html"],
    },
    {
    titulo:"Multi-Post Stories Gain+Glory",
    tecnologias:[ "dos","una","otra"],
    boton:"See Project",
    imagen:"()",
    },
];

const cardMobile = (insert) => { 
    //creando contenedor de la tarjeta
    const cardElement =  document. createElement("section") 
    //asignando propiedades del contenedor cardElement (class,id)
    cardElement.classList.add('post')
    cardElement.id = 'myRecentWork';
    //creando titulo de la tarjeta 
    const  cardTitle = document. createElement('h3')
    cardTitle.classList.add('subtitle')
    cardTitle.innerText = project.titulo; 'esto es texto'

    //creando tecnologias
    const ulCard = document. createElement('ul')
    // creando hijo de tecnologías (li)

    project.tecnologias.forEach((tec)=>{
        const listItem = document. createElement('li')
        listItem.classList.add('myRecentWorkItem')
        listItem.innerText = tec;
        ulCard.appendChild(listItem)
    })


// insert cards into cardsGird : iterar arreglo de proyectos e insertar tarjetas

const insertCards = ()=>{
    projects.forEach((project)=>{

        createcard(project)
    })
}
