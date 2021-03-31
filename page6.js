var webRefrence=document.querySelector(".webRefrence");
var webList=document.querySelectorAll(".webList");
var youTubeRefrence=document.querySelector(".youTubeRefrence");
var youTubeList=document.querySelectorAll(".youTubeList");
var googleRefrence=document.querySelector(".googleRefrence");
var googleList=document.querySelectorAll(".googleList");
var wikiRefrence=document.querySelector(".wikiRefrence");
var wikiList=document.querySelectorAll(".wikiList");

function check(){
    if(webList[0].style.display==="none"){
        for(var i=0;i<webList.length;i++){
            webList[i].style.display="";
        }
    }else if (webList[0].style.display===""){
        for(var i=0;i<webList.length;i++){
            webList[i].style.display="none";
        }
    }
}

function check2(){
    for(var i=0;i<webList.length;i++){
        webList[i].style.display="none";
    }
}

function check3(){
    if(youTubeList[0].style.display==="none"){
        for(var i=0;i<youTubeList.length;i++){
            youTubeList[i].style.display="";
        }
    }else if (youTubeList[0].style.display===""){
        for(var i=0;i<youTubeList.length;i++){
            youTubeList[i].style.display="none";
        }
    }
}

function check4(){
    for(var i=0;i<youTubeList.length;i++){
        youTubeList[i].style.display="none";
    }
}

function check5(){
    if(googleList[0].style.display==="none"){
        for(var i=0;i<googleList.length;i++){
            googleList[i].style.display="";
        }
    }else if (googleList[0].style.display===""){
        for(var i=0;i<googleList.length;i++){
            googleList[i].style.display="none";
        }
    }
}

function check6(){
    for(var i=0;i<googleList.length;i++){
        googleList[i].style.display="none";
    }
}

function check7(){
    if(wikiList[0].style.display==="none"){
        for(var i=0;i<wikiList.length;i++){
            wikiList[i].style.display="";
        }
    }else if (wikiList[0].style.display===""){
        for(var i=0;i<wikiList.length;i++){
            wikiList[i].style.display="none";
        }
    }
}

function check8(){
    for(var i=0;i<wikiList.length;i++){
        wikiList[i].style.display="none";
    }
}

webRefrence.addEventListener('click',check);
// webRefrence.addEventListener('click',check2);
youTubeRefrence.addEventListener('click',check3);
// youTubeRefrence.addEventListener('click',check4);
googleRefrence.addEventListener('click',check5);
// googleRefrence.addEventListener('click',check6);
wikiRefrence.addEventListener('click',check7);
// wikiRefrence.addEventListener('click',check8);
