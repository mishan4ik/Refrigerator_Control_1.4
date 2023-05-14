let Temp = document.querySelector(".block_temperature");
let Freezing = document.querySelector(".block_freezing");
let cooling = document.querySelector(".block_cooling");
let defrosting = document.querySelector(".block_defrosting");
let freshness = document.querySelector(".block_freshness");
let block_weather = document.querySelector(".block_weather");
let block_news = document.querySelector(".block_news");
let block_todo = document.querySelector(".block_todo");


Temp.onclick = function(){

    window.location = "./html/temp/temperature.html"

}
Freezing.onclick = function(){

    window.location = "./html/freezing/freezing.html"

}
cooling.onclick = function(){

    window.location = "./html/cool/Super_cool.html"

}

defrosting.onclick = function(){

    window.location = "./html/defrosting/defrosting.html"

}

freshness.onclick = function(){

    window.location = "./html/fresh/fresh.html"

}
block_weather.onclick = function(){

    window.location = "./html/weather/weather.html"

}
block_news.onclick = function() {

    window.location = "./html/news/news.html"

}

block_todo.onclick = function() {

    window.location = "./html/todo/todo.html"

}