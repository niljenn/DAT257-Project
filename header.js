import { setCategory } from "./boxScript.js";

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
        <a class="about" href="om_oss.html">Om våra principer</a>
        <div class="dropdown">
        <button class="dropbtn">Kategorier</button>
        <div class="dropdown-content">
            <a class="category" id="food" href="#">Mat</a>
            <a class="category" id="clothes" href="#">Kläder</a>
            <a class="category" id="all" href="#">Alla Företag</a>
        </div>

        </div>
        <a class="why" href="why_EcoScore.html">Varför just EcoScore?</a>
    </div> 
    </div>
    `;
}

// Call the function to create the header
createHeader();

function saveFilter (category) {
    localStorage.setItem("category_filter", category);
}


const foodbtns = document.querySelectorAll("#food");
const clothbtns = document.querySelectorAll("#clothes");
const allbtns = document.querySelectorAll("#all");

foodbtns.forEach(button => button.addEventListener("click", () => {
    saveFilter("food") 
    if(window.location.pathname !== "/category_page.html"){
        window.location.href = "category_page.html";
    }
    else {
        setCategory();
    }
}))

clothbtns.forEach(button => button.addEventListener("click", () => {
    saveFilter("clothes") 
    if(window.location.pathname !== "/category_page.html"){
        window.location.href = "category_page.html";
    }
    else {
        setCategory();
    }
}))

allbtns.forEach(button => button.addEventListener("click", () => {
    saveFilter("all") 
    if(window.location.pathname !== "/category_page.html"){
        window.location.href = "category_page.html";
    }
    else {
        setCategory();
    }
}))



