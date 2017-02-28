// 1. Count the number of records in the "Current Quarter Details" table.
var numberOfRecords = document.querySelectorAll("tr");
console.log(numberOfRecords.length - 2);

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var dashboardImage = document.querySelectorAll("img");

dashboardImage[0].src="http://unsplash.it/400?image=1036";
dashboardImage.alt = "WinterImage";

dashboardImage[1].src="http://unsplash.it/400?image=976";
dashboardImage.alt = "SpringImage";

dashboardImage[2].src="http://unsplash.it/400?image=778";
dashboardImage.alt = "SummerImage";

dashboardImage[3].src="http://unsplash.it/400?image=652";
dashboardImage.alt = "FallImage";


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
var currency = document.querySelectorAll(".text-muted");
currency[0].innerText= '$12,589.00.';
currency[1].innerText= '$10,400.00.';
currency[2].innerText= '$13,600.00.';
currency[3].innerText= '$14,700.00.';

// Another Way to do this
// var currencies = document.querySelectorAll('.text-muted');
// currencies.forEach(function(currency) {
//     var randomCurrency = (Math.ceil(Math.random()*100000) / 100);
//     currency.innerHTML = '$' + randomCurrency;
// })

// 4. Change the currently selected left side menu item from Overview to Reports.
var overview = document.querySelectorAll('li')[4];
overview.classList.remove('active');

var reports = document.querySelectorAll('li')[5];
reports.classList.add('active');

// 5. Set the default search input value to "Q4 sales".
var inputValue = document.querySelectorAll('form > input');
inputValue.forEach(function(input){
    input.setAttribute("placeholder","Q4 sales");
});





// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
var tableClass = document.querySelectorAll('table');
tableClass.forEach(function(hover){
hover.classList.add('table-hover')
 console.log(hover)
})

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>


var addSucess = document.querySelectorAll('tr');
addSucess.forEach(function(success, i){
    if(i>=7 && i<=10){
         success.classList.add('success');
        }
})



// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var tableHeader = document.querySelectorAll('th');
       tableHeader[0].innerHTML = 'ID';
       tableHeader[1].innerHTML = 'First Name';
       tableHeader[2].innerHTML = 'Last Name';
       tableHeader[3].innerHTML = 'Department';
       tableHeader[4].innerHTML = 'Client';

// 9. Make an array of  objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var rowOfObjects = [];
var arrayObjects = document.querySelectorAll('tbody tr');
//1. loop over the rows with forEach
arrayObjects.forEach(function(arrayObject) {
  // 2. declare a variable named object and set it to an object literal  
    var rowOfObject = {
        // 3. set object.id to the row.children[0].innerText
        id: Number(arrayObject.children[0].innerHTML.replace(',', '')),
        firstName: arrayObject.children[1].innerHTML,
        lastName: arrayObject.children[2].innerHTML,
        department: arrayObject.children[3].innerHTML,
        client: arrayObject.children[4].innerHTML,
    }
    // 4. push the object variable into the data array using the push method
    rowOfObjects.push(rowOfObject);
})
// 5. console log your data variable
console.log(arrayObjects)

// 10. Make each word in the table capitalized.
var capitalizeFirst = document.querySelectorAll('table');
capitalizeFirst.forEach(function(word) {
    word.classList.add('text-capitalize')
});
