let wifiOff = document.querySelector(".wifi_off");
let wifoN = document.querySelector(".wifi_on");
let weather = document.querySelector(".block_weather");
let news = document.querySelector(".block_news");
let todo = document.querySelector(".block_todo");


wifiOff.onclick = function() {

    wifiOff.style.display = "none";
    wifoN.style.display = "block"; 
    weather.style.display = "block"
    news.style.display = "block";
    todo.style.display = "block"
    

}
wifoN.onclick = function() {

    wifiOff.style.display = "block";
    wifoN.style.display = "none"; 
    weather.style.display = "none"
    news.style.display = "none";
    todo.style.display = "none"
    

}
