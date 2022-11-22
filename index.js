const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const cancelCross = document.querySelector('.cancel-cross');
const linkSection = document.querySelector('.menu-link');

menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')

});
cancelCross.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
})

linkSection.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')
});

const dataCards = [
    {
        id: 0,
        url: './imges/Snapshoot.JPG',
        title: 'Keeping track of hundreds of components',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        tecnologies: {
            tech1:'Ruby on rails',
            tech2: 'css',
            tech3: 'JavaScript',
            tech4: 'html',
        },
        linkVersion: 'https://www.google.com',
        linkSource: 'https://github.com/cilfonegabriel',
    },
    {
        id: 1,
        url: './imges/Snapshoot.JPG',
        title: 'Keeping track of hundreds of components',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        tecnologies: {
            tech1:'Ruby on rails',
            tech2: 'css',
            tech3: 'JavaScript',
            tech4: 'html',
        },
        linkVersion: 'https://www.google.com',
        linkSource: 'https://github.com/cilfonegabriel/',
    },
    {
        id: 2,
        url: './imges/Snapshoot.JPG',
        title: 'Keeping track of hundreds of components',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        tecnologies: {
            tech1:'Ruby on rails',
            tech2: 'css',
            tech3: 'JavaScript',
            tech4: 'html',
        },
        linkVersion: 'https://www.google.com',
        linkSource: 'https://github.com/cilfonegabriel/',
    },
    {
        id: 3,
        url: './imges/Snapshoot.JPG',
        title: 'Keeping track of hundreds of components',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        tecnologies: {
            tech1:'Ruby on rails',
            tech2: 'css',
            tech3: 'JavaScript',
            tech4: 'html',
        },
        linkVersion: 'https://www.google.com',
        linkSource: 'https://github.com/cilfonegabriel/',
    },
    {
        id: 4,
        url: './imges/Snapshoot.JPG',
        title: 'Keeping track of hundreds of components',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        tecnologies: {
            tech1:'Ruby on rails',
            tech2: 'css',
            tech3: 'JavaScript',
            tech4: 'html',
        },
        linkVersion: 'https://www.google.com',
        linkSource: 'https://github.com/cilfonegabriel/',
    },
    {
        id: 5,
        url: './imges/Snapshoot.JPG',
        title: 'Keeping track of hundreds of components',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        tecnologies: {
            tech1:'Ruby on rails',
            tech2: 'css',
            tech3: 'JavaScript',
            tech4: 'html',
        },
        linkVersion: 'https://www.google.com',
        linkSource: 'https://github.com/cilfonegabriel/',
    },
    {
        id: 6,
        url: './imges/Snapshoot.JPG',
        title: 'Keeping track of hundreds of components',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        tecnologies: {
            tech1:'Ruby on rails',
            tech2: 'css',
            tech3: 'JavaScript',
            tech4: 'html',
        },
        linkVersion: 'https://www.google.com',
        linkSource: 'https://github.com/cilfonegabriel/',
    },
];

const cardWorkDetailsMobile = (index) => `
    <article class="card-work-details-mobile">
        <button type="button" class="btn-close-details">
            <img src="./imges/Icon-Cancel.svg" alt="cancel icon">
        </button>
        <div class="card-image-details-mobile">
            <img src=${dataCards[index].url} alt="a guy with a backpack in mountain">
        </div>
        <h2 class = "card-title-mobile">
            ${dataCards[index].title}
        </h2>
        <ul class = "card-tags-mobile">
            <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
            <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
            <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
            <li class="tag-mobile">${dataCards[index].tecnologies.tech4}</li>
        </ul>
        <p class="card-paragraph-mobile">
            ${dataCards[index].description}
        </p>
        <div class = "card-button-mobile">
            <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile">
            See Live
            <img src = "./imges/Enable.png" alt = "see live icon"
            </a>
            <a href=${dataCards[index].linkSource} class="btn-card-details-mobile">
            See Sources
            <img src="./assest/github.svg" alt="see github icon">
            </a>
        </div>
        <script src="index.js"></script>
    </article>
`;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < arrayBtnPopup.length; i++) {
    arrayBtnPopup[i].addEventListener('click', () => {
      const cardWork = document.createElement('div');
      cardWork.innerHTML = cardWorkDetailsMobile(i);
      document.body.appendChild(cardWork);
      const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
      btnCloseDetailsMobile.addEventListener('click', async () => {
        document.body.removeChild(cardWork);
      });
    });
  }