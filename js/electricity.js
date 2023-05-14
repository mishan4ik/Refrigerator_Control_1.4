let electricity = document.querySelector(".block_electricity");
let Temp1 = document.querySelector(".block_temperature");
let Freezing1 = document.querySelector(".block_freezing");
let cooling1 = document.querySelector(".block_cooling");
let defrosting1 = document.querySelector(".block_defrosting");
let freshness1 = document.querySelector(".block_freshness")
let img_electricity1 = document.querySelector(".on_electricity");
let img_electricity2 = document.querySelector(".off_electricity");
let wifi = document.querySelector(".block_wifi");
let wifiOnCheck = document.querySelector(".wifi_on");
let wifiOffCheck = document.querySelector(".wifi_off");
let weather_check = document.querySelector(".block_weather"); 
let news_check = document.querySelector(".block_news");
let todo_check = document.querySelector(".block_todo");

electricity.onclick = function() {

    if(img_electricity1.style.display == ""){

        img_electricity1.style.display = "none"
        img_electricity2.style.display = "block";
        Temp1.style.pointerEvents='none';
        Freezing1.style.pointerEvents='none';
        cooling1.style.pointerEvents='none';
        defrosting1.style.pointerEvents='none';
        freshness1.style.pointerEvents='none';
        wifi.style.pointerEvents='none';
        weather_check.style.display='none';
        news_check.style.display="none"
        todo_check.style.display="none"
        wifiOnCheck.style.display = "none"
        wifiOffCheck.style.display = "block"

    }
    else{

        img_electricity1.style.display = ""
        img_electricity2.style.display = "none"
        Temp1.style.pointerEvents='auto';
        Freezing1.style.pointerEvents='auto';
        cooling1.style.pointerEvents='auto';
        defrosting1.style.pointerEvents='auto';
        freshness1.style.pointerEvents='auto';
        wifi.style.pointerEvents='auto';
        weather_check.pointerEvents='auto';
        news_check.pointerEvents='auto'
        todo_check.pointerEvents='auto'

    }


}