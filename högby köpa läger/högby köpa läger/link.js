
document.getElementById("facebook").addEventListener("click", gotofacebook);

function gotofacebook()
{
    window.location.href = "https://www.facebook.com/hogbyiffriidrott";
}
/////////////////////////////////////////////////
document.getElementById("Hogby").addEventListener("click", gotohogby);

function gotohogby()
{
    //ändra till idrott online
    window.location.href = "http://idrottonline.se/HogbyIF/";
}
//////////////////////////////////////////////////
document.getElementById("olandrun").addEventListener("click", gotoolandrun);

function gotoolandrun()
{
    window.location.href = "http://www.olandrunning.se/";
}
//////////////////////////////////////////////////
document.getElementById("irunkalmar").addEventListener("click", gotoirunkalmar);

function gotoirunkalmar()
{
    window.location.href = "http://irunkalmar.com/";
}
/////////////////////////////////////////////////
document.getElementById("friihögimg").addEventListener("click", gotohogbyfrii);

function gotohogbyfrii()
{
    //ändra till idrott online
    window.location.href = "http://www.hogbyif.se/friidrott/";
}
document.getElementById("fotbollshogby").addEventListener("click", gotohogbyfotboll);

function gotohogbyfotboll()
{
    //ändra till idrott online
    window.location.href = "http://www.bodahogby.se/start";
}

document.getElementById("linkbild").addEventListener("click", bildgalleri);

function bildgalleri(){
    document.getElementById("papercontent").style.display = "none";
    document.getElementById("bildgalleri").style.display = "block";
}

document.getElementById("back").addEventListener("click", bildgallerioff);
function bildgallerioff(){
    document.getElementById("papercontent").style.display = "block";
    document.getElementById("bildgalleri").style.display = "none";
}
var settime;
document.getElementById("menuicon").addEventListener("click", showphonediv)
var menublock = true;
function showphonediv(){
    if(menublock == true){
       
 document.getElementById("menulessthan524px").style.width = "50%";
    document.getElementById("menulist").style.display = "block";
        clearTimeout(settime);
        document.getElementById("menulist").style.animation = "fadein2 2s";
        menublock = false;
    }
    else{
        settime = setTimeout(function(){
           
            document.getElementById("menulist").style.display = "none";
            },2000);
       document.getElementById("menulessthan524px").style.width = "30px"; document.getElementById("menulist").style.animation = "fadeout2 2s";
        menublock = true;
    }
}
function myFunction(x) {
    x.classList.toggle("change");
}