// Import company data
import { companies } from './companies.js';
import { search } from './search.js';


// Array of box data
var boxesData = [];
for (var i = 0; i < companies.length; i++) {
  var company = companies[i];
  var boxData = {
    name: company.name,
    rating: company.getOverallScore(),
    maxRating: 10,
    imageFile: company.imageFile,
    detailPageUrl: `./detail_co_page.html?id=${company.id}`
  };
  console.log(boxData);
  boxesData.push(boxData);
  console.log(boxData);
}
function sortBoxesData(query = '') {
  if (query) {
    // Sort the array based on the likeness of the query
    boxesData = search(query);
  } else {
    // Sort the array based on the current buttonPressed value
    if (buttonPressed === "best-to-worst-button") {
      boxesData.sort((a, b) => b.rating - a.rating);
    } else if (buttonPressed === "worst-to-best-button") {
      boxesData.sort((a, b) => a.rating - b.rating);
    }
  }

  // Recalculate the rating values
  for (var i = 0; i < boxesData.length; i++) {
    var company = companies.find(c => c.name === boxesData[i].name);
    boxesData[i].rating = company.getOverallScore();

    // Update maxRating property for each boxData object
  for (var i = 0; i < boxesData.length; i++) {
    var company = companies.find((c) => c.name == boxesData[i].name);
    boxesData[i].maxRating = 10;
}

  }
}

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');
  console.log(query); 

// Get references to the "best to worst" and "worst to best" buttons
const sortButton = document.getElementById('sortButton');
var bestToWorstButton = document.getElementById("best-to-worst-button");
var worstToBestButton = document.getElementById("worst-to-best-button");
// Initialize buttonPressed to "best-to-worst"
var buttonPressed = "best-to-worst-button";
// Add event listeners to the buttons
bestToWorstButton.addEventListener("click", function() {
  buttonPressed = "best-to-worst-button";
  sortBoxesData();
  renderBoxes();
  sortButton.textContent = 'Bäst till sämst';
});
worstToBestButton.addEventListener("click", function() {
  buttonPressed = "worst-to-best-button";
  sortBoxesData();
  renderBoxes();
  sortButton.textContent = 'Sämst till bäst';
});

// Call sortBoxesData to sort the array initially
sortBoxesData(query)
// Call renderBoxes to render all the boxes initially
renderBoxes();
function renderBoxes() {
  // Container which holds all boxes
  var boxesContainer = document.getElementById("boxesContainer");
  // Clear the boxesContainer
  boxesContainer.innerHTML = "";

  for (var i = 0; i < boxesData.length; i++) {
    var boxData = boxesData[i];
    // Box with company information
    var box = document.createElement("div");
    box.className = "box";
    // Anchor tag to link to detail page
    var detailPageLink = document.createElement("a");
    detailPageLink.href = boxData.detailPageUrl;
    detailPageLink.addEventListener("click", function (event) {
      event.preventDefault();
      var id = this.href.split("=")[1];
      var company = companies.find((c) => c.id == id);
      window.location.href = `./detail_co_page.html?id=${id}`;
    });
    // Container for rating
    var boxInfo = document.createElement("div");
    boxInfo.className = "box-info";
    var boxRatingContainer = document.createElement("div");
    boxRatingContainer.className = "box-rating-container";

    var ratingBarContainer = document.createElement("div");
    ratingBarContainer.className = "rating-bar-container";
    var ratingBar = document.createElement("div");
    ratingBar.className = "rating-bar";
    var ratingBarWidth = (boxData.rating / boxData.maxRating) * 100;
    console.log(`maxRating: ${boxData.maxRating}, rating: ${boxData.rating}`);
    ratingBar.style.width = ratingBarWidth + '%';

    ratingBarContainer.appendChild(ratingBar);
    

    var ratingImage = document.createElement("div");
    ratingImage.className = "rating-image";

    ratingBarContainer.appendChild(ratingImage);

    boxRatingContainer.appendChild(ratingBarContainer);

    var ratingContainer = document.createElement("div");
    ratingContainer.className = "rating-container";
    var ratingText = document.createElement("span");
    ratingText.className = "rating-text";
    ratingText.textContent = boxData.rating;

    ratingContainer.append(boxRatingContainer, "Hållbarhet:", ratingText);
    boxInfo.appendChild(ratingContainer);

    // Add company image and info to box
    var img = document.createElement("img");
    img.src = boxData.imageFile;
    img.alt = boxData.name;
    var name = document.createElement("p");
    name.textContent = boxData.name;
    boxInfo.appendChild(name);
    detailPageLink.appendChild(img);
    detailPageLink.appendChild(boxInfo);
    box.appendChild(detailPageLink);
    boxesContainer.appendChild(box);

    // Find the rating bar element
    var ratingBar = boxRatingContainer.querySelector(".rating-bar");
    // Set the width of the rating bar based on the rating value
    ratingBar.style.width = (boxData.rating / boxData.maxRating) * 100 + "%";
  }
}
