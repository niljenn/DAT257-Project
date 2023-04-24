// Array of box data
var boxesData = [];

import { companies } from './companies.js';

for (var i = 0; i < companies.length; i++) {
  var company = companies[i];
  
  var boxData = {
    name: company.name,
    rating: company.getOverallScore(),
    maxRating:9,
    imageFile: company.imageFile
  };
  boxesData.push(boxData);
}

// Container which holds all boxes 
var boxesContainer = document.getElementById("boxesContainer");

for (var i = 0; i < boxesData.length; i++) {
  var boxData = boxesData[i];


  // Box with company information
  var box = document.createElement("div"); 
  box.className = "box";

  // Container for rating 
  var ratingContainer = document.createElement("div");
  ratingContainer.className = "rating-container";
  ratingContainer.style.width = "250px"
  
  // Rating text
  var ratingText = document.createElement("p");
  ratingText.className = "rating-text";
  ratingText.textContent = `${boxData.rating}/${boxData.maxRating}`;
  
  // Rating bar
  var ratingBarContainer = document.createElement("div");
  ratingBarContainer.className = "rating-bar-container";
  var ratingBar = document.createElement("div");
  ratingBar.className = "rating-bar";
  ratingBar.style.width = (boxData.rating / boxData.maxRating) * 100 + "%";
  ratingBarContainer.appendChild(ratingBar);

  ratingContainer.appendChild(ratingBarContainer);
  ratingContainer.append("Hållbarhet: ")
  ratingContainer.appendChild(ratingText);


  box.innerHTML = `
    <img src="${boxData.imageFile}" alt="${boxData.name}">
    <div class="box-info">
      <p>${boxData.name}</p>
      ${ratingContainer.outerHTML}
    </div>
  `;


  boxesContainer.appendChild(box);
}