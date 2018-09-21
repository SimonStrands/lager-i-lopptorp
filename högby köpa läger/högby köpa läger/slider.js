var bild11 = document.getElementById("sliderbild10");
var bild12 = document.getElementById("sliderbild11");
var bild13 = document.getElementById("sliderbild12");
var bild14 = document.getElementById("sliderbild13");
var bild15 = document.getElementById("sliderbild14");
var bild16 = document.getElementById("sliderbild15");
var bild17 = document.getElementById("sliderbild16");
var bild18 = document.getElementById("sliderbild17");
var bild19 = document.getElementById("sliderbild18");
var bild110 = document.getElementById("sliderbild19");
var bild111 = document.getElementById("sliderbild110");
var bild112 = document.getElementById("sliderbild111");
var bild113 = document.getElementById("sliderbild112");
var bild114 = document.getElementById("sliderbild113");
var bild115 = document.getElementById("sliderbild114");
var bild116 = document.getElementById("sliderbild115");

var bild20 = document.getElementById("sliderbild20");
var bild21 = document.getElementById("sliderbild21");
var bild22 = document.getElementById("sliderbild22");
var bild23 = document.getElementById("sliderbild23");
var bild24 = document.getElementById("sliderbild24");
var bild25 = document.getElementById("sliderbild25");
var bild26 = document.getElementById("sliderbild26");
var bild27 = document.getElementById("sliderbild27");
var bild28 = document.getElementById("sliderbild28");
var bild29 = document.getElementById("sliderbild29");

var slidsbilder1 = [bild11, bild12, bild13, bild14, bild15, bild16, bild17, bild18, bild19, bild110, bild111, bild112, bild113, bild114, bild115, bild116];
var slidsbilder2 = [bild20, bild21, bild22, bild23, bild24, bild25, bild26, bild27, bild28, bild29,];

var x = 0;
var x2 = 0;

var zindex = 0;
var zindex2 = 0;

var slider1length = slidsbilder1.length - 1;
var slider2length = slidsbilder2.length - 1;
var fullsliderlengt = slidsbilder1.length + slidsbilder2.length;

var lastpic;
var lastpic2;



function sliderfunction() {
    zindex++;
    zindex2++;
    
    slidsbilder1[x].style.display = "block";
    slidsbilder1[x].style.zIndex = zindex;
    slidsbilder1[x].style.animation = "fadein 2s";
    lastpic = slidsbilder1[x];
    slidsbilder2[x2].style.display = "block";
    slidsbilder2[x2].style.zIndex = zindex2;
    slidsbilder2[x2].style.animation = "fadein 2s";
    lastpic2 = slidsbilder2[x2];
    tabortbild(lastpic, lastpic2);
    
    if (x === slider1length) {
        x = 0;
    } 
    else {
        x++;
    }
    if(x2 == slider2length) {  
        x2 = 0;
    }
    else {
        x2++;
    }
    setTimeout(sliderfunction, 4000)
    
}
function tabortbild(lastpic, lastpic2){
        setTimeout(function(){lastpic.style.display = "none";
                             lastpic2.style.display = "none";}, 9000)
}

var start = true;
if (start === true) {
    sliderfunction();
    resize();
    start = false;  
}
  ////////////
 //img size//
////////////
function resize(){
    
    var divheight = document.getElementById("slider1").clientHeight;
    var divwidth = document.getElementById("slider1").clientWidth;
    for(var i = 0; i  < fullsliderlengt; i++) {
        document.getElementsByClassName("sliderbild")[i].style.height = divheight + "px";
        document.getElementsByClassName("sliderbild")[i].style.width = divwidth + "px";
    }
}

  ///////////
 //gallery//
///////////
var index = 0;
var gallerysrc = document.getElementById("bildgalleri");
var i;
var left = true;
for (i = 0; i < slider1length + 1; i++){
    
    var bilderna = slidsbilder1[index].src;
    var img = document.createElement("img");
    img.src = bilderna;
    img.style.width = "calc(50% - 4px)";
    gallerysrc.appendChild(img);
    img.classList.add("galleryhover");
    index++;
    
        img.style.margin = "auto";
    if(left == true){
        left = false;
    }
    else{
        img.style.marginLeft = "8px";
        left = true;
    }
   
    
}
left = true;
var index2 = 0;
for (i = 0; i < slider2length + 1; i++){
    
    var bilderna2 = slidsbilder2[index2].src;
    img = document.createElement("img");
    img.src = bilderna2;
    img.style.width = "calc(50% - 4px)";
    gallerysrc.appendChild(img);
    img.classList.add("galleryhover");
    
    index2++;
    
    if(left == true){
        left = false;
    }
    else{
        img.style.marginLeft = "8px";
        left = true;
    }
}



