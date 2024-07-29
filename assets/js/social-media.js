let socialMediaList = [];


function createHtml(socialMedia) {
  return `
        <div class="linksBio">
        <a href="${socialMedia.url}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="${socialMedia.iconPath}" />
          </svg>
          <p>${socialMedia.platform}</p>
        </a>
      </div>
  `
}


function init() {
  fetch('assets/json/social-media.json')
    .then(res => res.json())
    .then(data => { 
      if (Array.isArray(data.socialMedia)) {
        socialMediaList = data.socialMedia;

        const container = document.getElementById('linksList');
        socialMediaList.forEach(socialMedia => {
          container.innerHTML += createHtml(socialMedia);
        });
      } else {
        console.error('Veri bir dizi formatında değil:', data);
      }
    
});}

init();