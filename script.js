var cityInput = document.querySelector("#city-text")
var cityForm = document.querySelector("#locations-form")
var cityList = document.querySelector("#city-list")
var cities = ["New York", "Austin", "Chicago"];
var CityCount = "";

renderCities();

var queryURL = "api.openweathermap.org/data/2.5/forecast?q={Chicago}&appid={34c625f0fb47ccd59d343b8dead43393}"
var key = "&appid={34c625f0fb47ccd59d343b8dead43393}"

//var cityNameInput = $("#city-text")
var city="q={chichago}"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(queryURL);
  console.log(url);
  console.log(response);
})

// Logging the URL so we have access to it for troubleshooting









function renderCities() {
  cityList.innerHTML = "";
  CityCount.textContent = cities.length;

  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];

    var li = document.createElement("button");
    li.textContent = city;
    li.classList.add("btn", "btn-secondary");

    cityList.appendChild(li);
  }

}

cityForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var cityText = cityInput.value.trim();

  if (cityText === "") {
    return;
  }

  cities.push(cityText);
  cityInput.value = "";

  renderCities();


});


