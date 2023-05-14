const key = "pub_21717ec166139dde2dbbabb419d2b35553edb";
const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_21717ec166139dde2dbbabb419d2b35553edb&q=top`;
let block_news = document.querySelector(".block_news");
let title = document.querySelector(".title_news"); 
let paragraf = document.querySelector(".info_news");
let title1 = document.querySelector(".title_news1"); 
let paragraf1 = document.querySelector(".info_news1");
let title2 = document.querySelector(".title_news2"); 
let paragraf2 = document.querySelector(".info_news2");
let back = document.querySelector("#btn_back")
async function checkNews() {

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data,"data")

    title.innerHTML = data.results[9].title;
    paragraf.innerHTML = data.results[9].content;
    title1.innerHTML = data.results[8].title;
    paragraf1.innerHTML = data.results[8].content;
    title2.innerHTML = data.results[6].title;
    paragraf2.innerHTML = data.results[6].content;
}
checkNews();


paragraf.style.display = "none";
paragraf1.style.display = "none";
paragraf2.style.display = "none";


title.onclick = function() {

    if(paragraf.style.display == "none"){

        paragraf.style.display = "block";

    }

    else{

        paragraf.style.display = "none";

    }

}


title1.onclick = function() {

    if(paragraf1.style.display == "none"){

        paragraf1.style.display = "block";

    }

    else{

        paragraf1.style.display = "none";

    }

}

title2.onclick = function() {

    if(paragraf2.style.display == "none"){

        paragraf2.style.display = "block";

    }

    else{

        paragraf2.style.display = "none";

    }

}


back.onclick = function(){

    window.location = "../../index.html"

}

