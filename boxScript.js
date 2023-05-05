// Import company data
import { companies } from './companies.js';
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
  boxesData.push(boxData);
}
// Get references to the "best to worst" and "worst to best" buttons
var bestToWorstButton = document.getElementById("best-to-worst-button");
var worstToBestButton = document.getElementById("worst-to-best-button");
// Initialize buttonPressed to "best-to-worst"
var buttonPressed = "best-to-worst-button";
// Function to sort the boxesData array based on the current buttonPressed value
function sortBoxesData() {
  if (buttonPressed === "best-to-worst-button") {
    boxesData.sort((a, b) => b.rating - a.rating);
  } else if (buttonPressed === "worst-to-best-button") {
    boxesData.sort((a, b) => a.rating - b.rating);
  }
}
// Add event listeners to the buttons
bestToWorstButton.addEventListener("click", function() {
  buttonPressed = "best-to-worst-button";
  sortBoxesData();
  renderBoxes();
});
worstToBestButton.addEventListener("click", function() {
  buttonPressed = "worst-to-best-button";
  sortBoxesData();
  renderBoxes();
});
// Call sortBoxesData to sort the array initially
sortBoxesData()
// Call renderBoxes to render all the boxes initially
renderBoxes();
function renderBoxes(){
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
    detailPageLink.addEventListener("click", function(event) {
      event.preventDefault();
      var id = this.href.split("=")[1];
      var company = companies.find(c => c.id == id);
      window.location.href = `./detail_co_page.html?id=${id}`;
    });
    // Container for rating
    var ratingContainer = document.createElement("div");
    ratingContainer.className = "rating-container";
    ratingContainer.style.width = "250px";
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
    ratingContainer.append("Hållbarhet: ");
    ratingContainer.appendChild(ratingText);
    // Add company image and info to box
    var img = document.createElement("img");
    img.src = boxData.imageFile;
    img.alt = boxData.name;
    var boxInfo = document.createElement("div");
    boxInfo.className = "box-info";
    var name = document.createElement("p");
    name.textContent = boxData.name;
    boxInfo.appendChild(name);
    boxInfo.appendChild(ratingContainer);
    detailPageLink.appendChild(img);
    detailPageLink.appendChild(boxInfo);
    box.appendChild(detailPageLink);
    boxesContainer.appendChild(box);
  }
}