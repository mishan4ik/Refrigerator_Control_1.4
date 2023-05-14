let back = document.getElementById("btn_back");
const key = "ed83b23f9aeb7b1cbf9a345d5c0ca405";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;




let searchInp = document.getElementById("search_inp");
let searchBtn = document.querySelector(".search_city");

let cloudy = document.querySelector(".cloudy");
let sunny = document.querySelector(".sunny");
let rain = document.querySelector(".rain");


cloudy.style.display = "none"
sunny.style.display = "none"
rain.style.display = "none"

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${key}`);
    const data = await response.json();
    console.log(data,"data")

    document.querySelector(".weather_temp").innerHTML = Math.round(data.main.temp) + "&#8451";
    document.querySelector(".weather_city").innerHTML = data.name;



    if(data.weather[0].main =="Clear"){

        sunny.style.display = "block";
        cloudy.style.display = "none";
        rain.style.display = "none";

    }
    else if(data.weather[0].main =="Clouds"){

        sunny.style.display = "none";
        cloudy.style.display = "block";
        rain.style.display = "none";

    }

    else if(data.weather[0].main =="Rain"){

        sunny.style.display = "none";
        rain.style.display = "block";
        cloudy.style.display = "none";

    }

}


searchBtn.addEventListener("click",() => {


    checkWeather(searchInp.value)
    searchInp.value = "";


})


back.onclick = function(){

    window.location = "../../index.html"

}

