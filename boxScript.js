// Array of box data
var boxesData = [
  {
    name: "Box 1 Name",
    rating: 1,
    maxRating: 5,
    imageSrc: "box1.jpg"
  },
  {
    name: "Box 2 Name",
    rating: 8,
    maxRating: 10,
    imageSrc: "box2.jpg"
  },
  {
    name: "Box 3 Name",
    rating: 3,
    maxRating: 5,
    imageSrc: "box3.jpg"
  },
  {
    name: "Jamal",
    rating: 10,
    maxRating: 10,
    imageSrc: "jamal.jpeg"
  }
  // Add more box data here as needed
];

// Get the boxes container element
var boxesContainer = document.getElementById("boxesContainer");

// Loop through the boxes data array and generate the boxes dynamically
for (var i = 0; i < boxesData.length; i++) {
  var boxData = boxesData[i];

  // Create a box element
  var box = document.createElement("div");
  box.className = "box";

  // Create a rating container element
  var ratingContainer = document.createElement("div");
  ratingContainer.className = "rating-container";
  ratingContainer.style.width = "200px"
  
  // Create a rating text element
  var ratingText = document.createElement("p");
  ratingText.className = "rating-text";
  ratingText.textContent = `${boxData.rating}/${boxData.maxRating}`;
  
  // Create a rating bar element
  var ratingBarContainer = document.createElement("div");
  ratingBarContainer.className = "rating-bar-container";
  var ratingBar = document.createElement("div");
  ratingBar.className = "rating-bar";
  ratingBar.style.width = (boxData.rating / boxData.maxRating) * 100 + "%";
  ratingBarContainer.appendChild(ratingBar);

  // Append the rating text and rating bar to the rating container
  ratingContainer.appendChild(ratingBarContainer);
  ratingContainer.append("Hållbarhet: ")
  ratingContainer.appendChild(ratingText);


  box.innerHTML = `
    <img src="${boxData.imageSrc}" alt="${boxData.name}">
    <div class="box-info">
      <p>${boxData.name}</p>
      ${ratingContainer.outerHTML}
    </div>
  `;

  // Append the box to the boxes container
  boxesContainer.appendChild(box);
}
