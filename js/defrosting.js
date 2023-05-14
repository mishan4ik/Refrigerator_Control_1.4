let btnDefrost = document.getElementById("btn_defrost");
let setTime = document.getElementById("inp_setTime");
let timeText = document.getElementById("time_defrost");
let infodefrost = document.getElementById("info_defrost");
let block_setTime = document.querySelector(".block_set_time")
let titleDoIt = document.querySelector(".title_doit");
let back = document.getElementById("btn_back")





let time; 

let timer = () => {

    


    if(time== 0){

        infodefrost.innerHTML = "Розмаражування закінчено."
        timeText.innerHTML = ""

    }
    else{

        time--;
        timeText.innerHTML = time        


    }


}


btnDefrost.onclick = function(){

    setTime = document.getElementById("inp_setTime");
    

    time = setTime.value;
    if(time < 11){

        infodefrost.innerHTML = "Для розмаражування треба більше часу"

    }
    else{
        timeText.innerHTML = time;
        block_setTime.style.display = "none";
    titleDoIt.style.display = "none"
    infodefrost.innerHTML = ""

    setInterval(timer,2000)


    }
    
    

}

back.onclick = function(){

    window.location = "../../index.html"

}