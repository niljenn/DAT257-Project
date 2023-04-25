import { companies } from './companies.js';

const button = document.getElementById("searchbtn");
button.addEventListener("click", search);

function search() {

    var slist = [];
    var i = 0;

    for ( i = 0; i < companies.length; i++ ) {
        var company = companies[i];

        var searchData = { name: company.name};
        slist.push(searchData);

    }

    console.log(slist)

    /*let input = document.getElementById('searchbar').value */
    /*input = input.toLowerCase();*/

    for ( i = 0; i < slist.length; i++ ) {
        var search_item = slist[i]
        
        if (search_item.name === "EcoLife Inc.") {
            window.location.href="./om_oss.html";
        }

    }
}
