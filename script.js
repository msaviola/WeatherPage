var cityInput = document.querySelector("#city-text")
var cityForm = document.querySelector("#locations-form")
var cityList = document.querySelector("#city-list")
var cities = [];
var CityCount ="";

function renderCities(){
    cityList.innerHTML = "";
    CityCount.textContent = cities.length;

    for(var i=0; i<cities.length; i++){
        var city = cities[i];

        var li = document.createElement("button");
        li.textContent = city;
        // li.classList.add("btn");
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
