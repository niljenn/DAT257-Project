import { companies } from './companies.js';

document.addEventListener("DOMContentLoaded", function() {

    const activeCompany = companies.find(company => company.active == true);

    const logo = document.querySelector('.logo');
    const companyName = document.querySelector('.companyName');
    const emmisionScore = document.querySelector('.emmisionScore');
    const animalScore = document.querySelector('.animalScore');
    const plasticScore = document.querySelector('.plasticScore');
    const otherScore = document.querySelector('.otherScore');
    const scoreText = document.querySelector('.scoreText');

    logo.src = activeCompany.imageFile;
    companyName.textContent = activeCompany.name;
    emmisionScore.textContent = `${activeCompany.ecoFriendliness}/10`;
    animalScore.textContent = `${activeCompany.animalWelfare}/10`;
    plasticScore.textContent = `${activeCompany.socialImpact}/10`;
    otherScore.textContent = `${activeCompany.diversity}/10`;
    scoreText.textContent = `What we think about ${activeCompany.name} based on the data we gathered...`;

});