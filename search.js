import { companies } from './companies.js';
/*import { boxScript } from './boxScript.js';*/

const button = document.getElementById("searchbtn");
button.addEventListener("click", search);


function search() {

    const searchResultDiv = document.getElementById("search-result");
    searchResultDiv.innerHTML = ""; // clear previous search results



    let slist = [];
    var i = 0;

    for ( i = 0; i < companies.length; i++ ) {



        var company = companies[i];
        let input = document.getElementById('searchbar').value;
        input = input.toLowerCase();

        //console.log(input)

        const searchData = { name: company.name}; // An object

        if (searchData.name.toLowerCase().includes(input))   {
            //window.location.href = "./search_page.html"
            const searchResult = document.createElement("p");
            searchResult.textContent = searchData.name;
            //searchResultDiv.appendChild(searchResult);
            console.log(searchData.name) //We want the first letter to be prioritized an put at top. */


            /*
            // Add event listener to search result element
            searchResult.addEventListener("click", function() {
                // Get corresponding company object
                const company = companies.find(c => c.name === searchData.name);
                if (company) {
                    // Display box container for company
                    const boxContainer = document.getElementById("box-container");
                    boxContainer.innerHTML = "";
                    const box = createBox(company);
                    boxContainer.appendChild(box);
                }
            });
            */


        }

        else {
            console.log('none')
        }

    }

}


function searchCompanies(query) {
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(query)
  );
  return filteredCompanies;
}

// Define a function to update the box container with the search result
function updateBoxContainer(searchResult) {
  const boxContainer = document.getElementById('boxes-container');
  boxContainer.innerHTML = ''; // clear the previous content in the box container
  if (searchResult.length === 0) {
    boxContainer.innerHTML = '<p>No results found.</p>';
  } else {
    boxContainer.classList.add('boxes-container'); // add the CSS class to the box container
    for (let i = 0; i < searchResult.length; i++) {
      const companyBox = document.createElement('div');
      companyBox.className = 'box';
      companyBox.innerHTML = `<h3>${searchResult[i].name}</h3>`;
      //companyBox.innerHTML = `<h3>${searchResult[i].name}</h3><p>${searchResult[i].description}</p>`;
      boxContainer.appendChild(companyBox);
    }
    //renderBoxes(); // Call the renderBoxes function to populate the boxes with data
  }
}

// Listen for click event on the search button
const searchBtn = document.getElementById('searchbtn');
searchBtn.addEventListener('click', () => {
  const searchQuery = document.getElementById('searchbar').value.toLowerCase();
  const searchResult = searchCompanies(searchQuery);
  updateBoxContainer(searchResult);
});






/*
function createBox(company) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <h3>${company.name}</h3>
        <p>${company.description}</p>
        <a href="${company.url}" target="_blank">${company.url}</a>
    `;
    return box;
}
*/

/*
searchButton.addEventListener("click", function() {
  // Get the search input value
  var inputValue = searchInput.value.trim().toLowerCase();
  // Filter the companies array to find the matching company
  var company = companies.find(c => c.name.toLowerCase() === inputValue);
  if (company) {
    // Display box container for company
    const boxContainer = document.getElementById("box-container");
    boxContainer.innerHTML = "";
    const box = createBox(company);
    boxContainer.appendChild(box);
  } else {
    // Clear the box container if no matching company is found
    const boxContainer = document.getElementById("box-container");
    boxContainer.innerHTML = "";
  }
});
*/