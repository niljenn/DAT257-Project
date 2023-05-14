function createHeader() {
    // Find the header element in your HTML file
    const headerElement = document.querySelector('header');

    headerElement.innerHTML = `
    <div class="navbar"> 
    <div class="icon"> 
        <a href="index.html">
            <img class="leafLogo" id="leafLogo" src="images/bladetmörk.png">
            <h2 class="logo">EcoScore</h2>
        </a>
    </div>
    <div class="menu">
        <a class="about" href="om_oss.html">Om oss</a>
        <div class="dropdown">
        <button class="dropbtn">Kategorier</button>
        <div class="dropdown-content">
            <a class="category" id="food" href="#">Mat</a>
            <a class="category" id="clothes" href="#">Kläder</a>
        </div>
        </div>
        <a class="why" href="why_EcoScore.html">Varför EcoScore?</a>
    </div> 
    </div>
    `;
}

// Call the function to create the header
createHeader();
