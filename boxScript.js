// Import the companies array from the companies.js file
const { companies } = require('./companies');

// Get the boxes container element from the HTML document
const boxesContainer = document.getElementById('boxesContainer');

// Loop through the companies array and create a miniature box for each company
for (let company of companies) {
  // Create a div element for the company box
  const companyBox = document.createElement('div');
  companyBox.classList.add('company-box');
  
  // Create an image element for the company's picture
  const companyImage = document.createElement('img');
  companyImage.src = company.picture;
  companyImage.alt = `${company.name} logo`;
  companyBox.appendChild(companyImage);
  
  // Create a p element for the company's overall rating
  const overallRating = document.createElement('p');
  overallRating.textContent = `Overall Rating: ${company.calculate_overall_score()}`;
  companyBox.appendChild(overallRating);
  
  // Add the company box to the boxes container
  boxesContainer.appendChild(companyBox);
}
