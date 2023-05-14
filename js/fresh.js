let first_mode = document.getElementById("first_mode");
let second_mode = document.getElementById("second_mode");
let third_mode = document.getElementById("third_mode");
let info = document.getElementById("info_fresh")
let btn_mode = document.getElementById("btn_mode");
let back = document.getElementById("btn_back");
let degree = "o";
let temp = 0;
let temp2 = -2;
first_mode.innerHTML = temp + "" +  degree.sup() + " " + "цельсія";
second_mode.innerHTML = temp2 + "" +  degree.sup() + " " + "цельсія";
third_mode.innerHTML = "від " + temp + "" +  degree.sup() + " " + "до" + " " + temp2 + "" +  degree.sup() + " " +  "цельсія";


first_mode.onclick = function() {

    first_mode.style.color = "blue";
    second_mode.style.color = "";
    third_mode.style.color = "";



}
second_mode.onclick = function() {

    first_mode.style.color = "";
    second_mode.style.color = "blue";
    third_mode.style.color = "";

}

third_mode.onclick = function() {

    first_mode.style.color = "";
    second_mode.style.color = "";
    third_mode.style.color = "blue";

}

btn_mode.onclick = function () {

    if(first_mode.style.color == "blue"){

        info.innerHTML = "Режим свіжості 0 градусів увімкнено"

    }
    if(second_mode.style.color == "blue"){

        info.innerHTML = "Режим свіжості -2 градуси увімкнено"

    }
    if(third_mode.style.color == "blue"){

        info.innerHTML = "Режим свіжості від 0 до -2 градусів увімкнено"
        info.style.width = 95 +"%"

    }
}

back.onclick = function(){

    window.location = "../../index.html"

}
