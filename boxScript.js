// Import company data
import { companies } from './companies.js';


// Array of box data
const allboxesData = [];
for (var i = 0; i < companies.length; i++) {
  var company = companies[i];
  var boxData = {
    name: company.name,
    emission: company.emission,
    waste: company.plasticUsage,
    animalwel: company.animalWelfare,
    rating: company.getOverallScore(),
    maxRating: 10,
    imageFile: company.imageFile,
    detailPageUrl: `./detail_co_page.html?id=${company.id}`,
    category: company.category
  };
  allboxesData.push(boxData);
}
let boxesData = allboxesData;

const foodCompaniesData = boxesData.filter(box => box.category === "food")
const clothCompaniesData = boxesData.filter(box => box.category === "cloth")


// Create Category class
class Category {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }

  getCategory() {
    return this.name;
  }

  getCompanies() {
    return this.data;
  }
}

// Create new category objects
var AllCompanies = new Category("Alla Företag", boxesData);
var foodCategory = new Category("Matföretag", foodCompaniesData);
var clothCategory = new Category("Klädföretag", clothCompaniesData);

// Set active category to foodCategory initially
var activeCategory = AllCompanies;

export function setCategory() {
  const storageCategory = localStorage.getItem("category_filter")
  if (storageCategory === "food"){
    activeCategory = foodCategory;
    boxesData = foodCompaniesData;
  }
  if(storageCategory === "clothes"){
    activeCategory = clothCategory;
    boxesData = clothCompaniesData;
  }
  if(storageCategory === "all"){
    activeCategory = AllCompanies;
    boxesData = allboxesData;
  }
  sortBoxesData();
  renderBoxes();
}

function sortBoxesData() {
  if (buttonPressed === "best-to-worst-button") {
    boxesData.sort((a, b) => b.rating - a.rating);
  } else if (buttonPressed === "worst-to-best-button") {
    boxesData.sort((a, b) => a.rating - b.rating);
  }
}


if(window.location.pathname === "/category_page.html"){
// Get references to the "best to worst" and "worst to best" buttons
const sortButton = document.getElementById("sortButton");
var bestToWorstButton = document.getElementById("best-to-worst-button");
var worstToBestButton = document.getElementById("worst-to-best-button");
// Initialize buttonPressed to "best-to-worst"
var buttonPressed = "best-to-worst-button";


// Get the buttons by their IDs
document.getElementById("searchbtn").addEventListener("click", function() {
  var query = document.getElementById("searchbar").value;
  if (query.trim() !== "") {
      window.location.href = "search_page.html?query=" + encodeURIComponent(query);
  }
});

// Function to sort the boxesData array based on the current buttonPressed value

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

//Sort by functionality (eco labels)
const emissionCheck = document.querySelector('#emission');
const wasteCheck = document.querySelector('#waste');
const animalCheck = document.querySelector('#animal');
const altText = document.getElementById('altText');

emissionCheck.addEventListener('change', (event) => {
  const isChecked = event.target.checked;

  if(isChecked){
    sortLabels();
    renderBoxes();
  }
  else{
    sortBoxesData();
    renderBoxes();
  }
});

wasteCheck.addEventListener('change', (event) => {
  const isChecked = event.target.checked;

  if(isChecked){
    sortLabels();
    renderBoxes();
  }
  else{
    sortBoxesData();
    renderBoxes();
  }
});

animalCheck.addEventListener('change', (event) => {
  const isChecked = event.target.checked;

  if(isChecked){
    sortLabels();
    renderBoxes();
  }
  else{
    sortBoxesData();
    renderBoxes();
  }
});


function sortLabels () {
  if(emissionCheck.checked){
    boxesData.sort((a, b) =>  b.emission - a.emission);
    altText.innerText = 'CO2-utsläpp';
  }

  else if(wasteCheck.checked){
    boxesData.sort((a, b) => b.waste - a.waste);
    altText.innerText = 'Avfall';
  }

  else if(animalCheck.checked){
    boxesData.sort((a, b) => b.animalwel - a.animalwel);
    altText.innerText = 'Djurvänlighet';
  }

}

//End of sort by functionality (eco labels)




// Call sortBoxesData to sort the array initially
sortBoxesData()
// Call renderBoxes to render all the boxes initially
renderBoxes();


setCategory();
}

function renderBoxes(){
  // Container which holds all boxes
  var boxesContainer = document.getElementById("boxesContainer");
  // Clear the boxesContainer
  boxesContainer.innerHTML = "";
  

  // Get reference to chosen category element
  const chosenCategoryElement = document.querySelector('.chosen_category');
  // Update chosen category text
  chosenCategoryElement.querySelector('.category_rubric').textContent = `Resultat för "${activeCategory.getCategory()}"`;


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

    var boxRatingContainer = document.createElement("div");
    boxRatingContainer.className = "box-rating-container";

    var ratingBarContainer = document.createElement("div");
    ratingBarContainer.className = "rating-bar-container";
    var ratingBar = document.createElement("div");
    ratingBar.className = "rating-bar";
    ratingBar.style.width = (boxData.rating / boxData.maxRating) * 100 + "%";
    ratingBarContainer.appendChild(ratingBar);

    var ratingImage = document.createElement("div");
    ratingImage.className = "rating-image";

    ratingBarContainer.appendChild(ratingImage);

    boxRatingContainer.appendChild(ratingBarContainer);

  var ratingContainer = document.createElement("div");
  ratingContainer.className = "rating-container";
  var ratingText = document.createElement("span");
  ratingText.className = "rating-text";
  ratingText.textContent = boxData.rating / 2;

    ratingContainer.append(boxRatingContainer, "Hållbarhet:", ratingText);


    

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