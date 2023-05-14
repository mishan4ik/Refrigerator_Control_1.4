let inp_case = document.getElementById("search_add_case");
let btn_case = document.getElementById("add_case");
let task = document.querySelector(".case");
let back = document.getElementById("btn_back"); 
let arr = [];





    btn_case.onclick = function() {

        inp_case.value;


            if(inp_case.value == ""){
    
            }
            else{
        
                arr.push(inp_case.value);
                let li = document.createElement('li');
                li.innerHTML = inp_case.value;
                task.append(li);
                let btn_check = document.createElement('button');
                btn_check.classList.add("add");
                li.classList.add("info");
                let btn_ban = document.createElement('button');
                btn_check.style.backgroundImage = "url(../../img/todo_list/check.png)";
                btn_ban.style.backgroundImage = "url(../../img/todo_list/ban.png)";
                btn_ban.style.backgroundRepeat = "no-repeat"
                btn_check.style.backgroundRepeat = "no-repeat"
                btn_check.style.width = 35+"px";
                btn_check.style.height = 35+"px";
                btn_ban.style.width = 35 +"px";
                btn_ban.style.height = 35 +"px";
        
                li.after(btn_check);
                btn_check.after(btn_ban)

                    btn_check.onclick = function() {
             
                        li.style.textDecoration = "line-through"
                 
                        };
                        btn_ban.onclick = function() {

                            btn_check.remove();
                            li.remove();
                            btn_ban.remove();


                        }
       }    

    }


    back.onclick = function(){

        window.location = "../../index.html"
    
    }
    