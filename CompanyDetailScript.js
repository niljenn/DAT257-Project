

import { companies } from './companies.js';


document.addEventListener("DOMContentLoaded", async function() {

 
      

    const urlParams = new URLSearchParams(window.location.search);
    const companyId = urlParams.get('id');
    const activeCompany = companies.find(company => company.id == companyId);
    document.getElementById("companyName").textContent = activeCompany.name;
    



    const logoImg = document.querySelector('.logoImg');
    const companyName = document.querySelector('.companyName');
    const website = document.querySelector('.website');
    const emmisionScore = document.querySelector('.emmisionScore');
    const animalScore = document.querySelector('.animalScore');
    const plasticScore = document.querySelector('.plasticScore');
    const otherScore = document.querySelector('.otherScore');
    const scoreText = document.querySelector('.scoreText');

    logoImg.src = activeCompany.imageFile;
    companyName.textContent = activeCompany.name;
    website.textContent = activeCompany.website;
    emmisionScore.textContent = `${activeCompany.emission}/10`;
    animalScore.textContent = `${activeCompany.animalWelfare}/10`;
    plasticScore.textContent = `${activeCompany.plasticUsage}/10`;
    

    

    
    try {
      const description = await activeCompany.getDescription();
      const sections = description.split('\n\n'); //Assuming sections are seperated by double line breaks

      let isFirstSection = true;
        const scoreText = document.getElementById('scoreText');

        sections.forEach((section, index) => {
          if (isFirstSection) {
            scoreText.innerHTML += `<p>${section.replace(/\n/g, '<br>')}</p>`;
            isFirstSection = false;
          } else {
            let heading;
            switch (index) {
              case 1:
                heading = 'Avfall:';
                break;
              case 2:
                heading = 'Djurskydd:';
                break;
              default:
                heading = `Section ${index}:`;
            }

            scoreText.innerHTML += `<h3>${heading}</h3>`;
            scoreText.innerHTML += `<p>${section.replace(/\n/g, '<br>')}</p>`;
          }
        });

    } catch (error) {
      console.error('Error retrieving description:', error);
    }
  
  

});

export function displayCompanyDetails(company) {
    // Get the elements to update
    const logoElement = document.getElementById('logoImg');
    const companyNameElement = document.getElementById('companyName');
    const website = document.getElementById('website');
    const emmisionScoreElement = document.getElementById('emmisionScore');
    const animalScoreElement = document.getElementById('animalScore');
    const plasticScoreElement = document.getElementById('plasticScore');
    const otherScoreElement = document.getElementById('otherScore');
    const scoreTextElement = document.getElementById('scoreText');

  
    // Update the elements with the company details
    logoElement.src = company.logoImg;
    companyNameElement.innerText = company.name;
    websiteElement.innerText = company.website;
    emmisionScoreElement.innerText = company.emmisionScore;
    animalScoreElement.innerText = company.animalScore;
    plasticScoreElement.innerText = company.plasticScore;
    otherScoreElement.innerText = company.otherScore;
    scoreTextElement.innerText = company.getDescription();
  }
  document.getElementById("searchbtn").addEventListener("click", function() {
    var query = document.getElementById("searchbar").value;
    if (query.trim() !== "") {
        window.location.href = "search_page.html?query=" + encodeURIComponent(query);
    }
});