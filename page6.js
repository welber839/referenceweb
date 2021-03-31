var webRefrence=document.querySelector(".webRefrence");
var webList=document.querySelectorAll(".webList");
var youTubeRefrence=document.querySelector(".youTubeRefrence");
var youTubeList=document.querySelectorAll(".youTubeList");
var googleRefrence=document.querySelector(".googleRefrence");
var googleList=document.querySelectorAll(".googleList");
var wikiRefrence=document.querySelector(".wikiRefrence");
var wikiList=document.querySelectorAll(".wikiList");

function check(){
    for(var i=0;i<webList.length;i++){
        webList[i].style.display="";
    }
}

function check2(){
    for(var i=0;i<webList.length;i++){
        webList[i].style.display="none";
    }
}

function check3(){
    for(var i=0;i<youTubeList.length;i++){
        youTubeList[i].style.display="";
    }
}

function check4(){
    for(var i=0;i<youTubeList.length;i++){
        youTubeList[i].style.display="none";
    }
}

function check5(){
    for(var i=0;i<googleList.length;i++){
        googleList[i].style.display="";
    }
}

function check6(){
    for(var i=0;i<googleList.length;i++){
        googleList[i].style.display="none";
    }
}

function check7(){
    for(var i=0;i<wikiList.length;i++){
        wikiList[i].style.display="";
    }
}

function check8(){
    for(var i=0;i<wikiList.length;i++){
        wikiList[i].style.display="none";
    }
}

webRefrence.addEventListener('mouseover',check);
webRefrence.addEventListener('mouseout',check2);
youTubeRefrence.addEventListener('mouseover',check3);
youTubeRefrence.addEventListener('mouseout',check4);
googleRefrence.addEventListener('mouseover',check5);
googleRefrence.addEventListener('mouseout',check6);
wikiRefrence.addEventListener('mouseover',check7);
wikiRefrence.addEventListener('mouseout',check8);