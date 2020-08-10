var cityInput = document.querySelector("#city-text")
var cityForm = document.querySelector("#locations-form")
var cityList = document.querySelector("#city-list")
var cities = ["New York", "Austin", "Chicago"];
var CityCount ="";

renderCities();

function queryURL(){


var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=";
var key= { "api-key": "34c625f0fb47ccd59d343b8dead43393"};
queryParams.q = $("#city-text")
    .val()
    .trim();

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

$("#run-search").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  
    // Empty the region associated with the articles
    clear();
  
    // Build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();
  
    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
  });

function renderCities(){
    cityList.innerHTML = "";
    CityCount.textContent = cities.length;

    for(var i=0; i<cities.length; i++){
        var city = cities[i];

        var li = document.createElement("button");
        li.textContent = city;        
        li.classList.add("btn","btn-secondary");
        
        cityList.appendChild(li);
    }
    
}

cityForm.addEventListener("submit", function(event){
    event.preventDefault();

    var cityText = cityInput.value.trim();

    if (cityText ===""){
        return;
    }

    cities.push(cityText);
    cityInput.value = "";

    renderCities();


});
