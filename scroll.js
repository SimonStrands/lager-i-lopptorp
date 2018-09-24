window.onload = function() {
    scrollFunction()
};
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    var y = document.getElementById("welcomediv").scrollHeight;
    if (document.body.scrollTop > y || document.documentElement.scrollTop > y) {
        if(document.getElementById("body").clientWidth > 1450){
            //big
            document.getElementById("body").style.backgroundPosition="calc(100% + 10px) -30vw, 0px 0";
            document.getElementById("body").style.backgroundAttachment="fixed, fixed";
        }
        else if(document.getElementById("body").clientWidth <= 1450 && document.getElementById("body").clientWidth > 950){
                document.getElementById("body").style.backgroundPosition="calc(100% + 10px) 0vw, 0px 0";
                document.getElementById("body").style.backgroundSize="45% auto, 16% auto";
                document.getElementById("body").style.backgroundAttachment="fixed, fixed";
            }
        else if(document.getElementById("body").clientWidth <= 950){
            document.getElementById("body").style.backgroundPosition="calc(100% + 10px) 0px, 0px 0";
            document.getElementById("body").style.backgroundSize="60% auto, 16% auto";
            document.getElementById("body").style.backgroundAttachment="fixed, fixed";
        }
    }
    else{
        if(document.getElementById("body").clientWidth > 1450){
            //big
            document.getElementById("body").style.backgroundPosition="calc(100% + 10px) 0vw, 0px 30vw";
            document.getElementById("body").style.backgroundAttachment="scroll, scroll";
        }
        else if(document.getElementById("body").clientWidth <= 1450 && document.getElementById("body").clientWidth > 950)
            {
                document.getElementById("body").style.backgroundSize="45% auto, 16% auto";
                document.getElementById("body").style.backgroundPosition="calc(100% + 10px) 30vw, 0px 0";
                document.getElementById("body").style.backgroundAttachment="scroll, scroll";
            }
        else if(document.getElementById("body").clientWidth <= 950){
            document.getElementById("body").style.backgroundPosition="calc(100% + 10px) 30vw, 0px 30vw";
            document.getElementById("body").style.backgroundSize="60% auto, 16% auto";
            document.getElementById("body").style.backgroundAttachment="scroll, scroll";
        }
    }
}


//till menu
var pressonce = false;
function myFunction(x) {
    x.classList.toggle("change");
    if(pressonce == false){
         pressonce = true;
    }
    else
    {
        pressonce = false;
    }
}