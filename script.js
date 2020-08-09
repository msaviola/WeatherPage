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

        var li = document.createElement("li");
        li.textContent = city;
        cityList.appendChild(li);
    }
    
}

cityForm.addEventListener("submit", function(event){
    event.preventDefault();

    var cityText = cityInput.nodeValue.trim();

    if (cityText ===""){
        return;
    }

    cities= cities+ cityText;
    cityInput.value = "";

    renderCities();


};

)
