import { companies } from './companies.js';

document.addEventListener("DOMContentLoaded", function() {

 
      

    const urlParams = new URLSearchParams(window.location.search);
    const companyId = urlParams.get('id');
    const activeCompany = companies.find(company => company.id == companyId);
    document.getElementById("companyName").textContent = activeCompany.name;



    const logoImg = document.querySelector('.logoImg');
    const companyName = document.querySelector('.companyName');
    const emmisionScore = document.querySelector('.emmisionScore');
    const animalScore = document.querySelector('.animalScore');
    const plasticScore = document.querySelector('.plasticScore');
    const otherScore = document.querySelector('.otherScore');
    const scoreText = document.querySelector('.scoreText');

    logoImg.src = activeCompany.imageFile;
    companyName.textContent = activeCompany.name;
    emmisionScore.textContent = `${activeCompany.emission}/10`;
    animalScore.textContent = `${activeCompany.animalWelfare}/10`;
    plasticScore.textContent = `${activeCompany.plasticUsage}/10`;
    otherScore.textContent = `${activeCompany.other}/10`;
    scoreText.textContent = `What we think about ${activeCompany.name} based on the data we gathered...`;
    console.log("Hello from CompanyDetailScript.js!");



});

export function displayCompanyDetails(company) {
    // Get the elements to update
    const logoElement = document.getElementById('logoImg');
    const companyNameElement = document.getElementById('companyName');
    const emmisionScoreElement = document.getElementById('emmisionScore');
    const animalScoreElement = document.getElementById('animalScore');
    const plasticScoreElement = document.getElementById('plasticScore');
    const otherScoreElement = document.getElementById('otherScore');
    const scoreTextElement = document.getElementById('scoreText');
  
    // Update the elements with the company details
    logoElement.src = company.logoImg;
    companyNameElement.innerText = company.name;
    emmisionScoreElement.innerText = company.emmisionScore;
    animalScoreElement.innerText = company.animalScore;
    plasticScoreElement.innerText = company.plasticScore;
    otherScoreElement.innerText = company.otherScore;
    scoreTextElement.innerText = company.getDescription();
  }
  