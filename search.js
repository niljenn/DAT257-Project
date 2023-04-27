import { companies } from './companies.js';
/*import { boxScript } from './boxScript.js';*/

const button = document.getElementById("searchbtn");
button.addEventListener("click", search);


function search() {

    let slist = [];
    var i = 0;

    for ( i = 0; i < companies.length; i++ ) {
        var company = companies[i];
        let input = document.getElementById('searchbar').value;
        input = input.toLowerCase();

        /*console.log(input)*/

        const searchData = { name: company.name}; /*An object*/

        if (searchData.name.toLowerCase().includes(input)) {
            /*window.location.href = "./category_page.html"*/
            console.log(searchData.name) /*We want the first letter to be prioritized an put at top. */

        }

        else {
            console.log('none')
        }

    }

}
