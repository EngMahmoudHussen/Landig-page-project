let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value * 3+'px';
    mountain3.style.top = value * 2+'px';
    mountain4.style.top = value * 1.5+'px';
    river.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left= value * 4 +'px';
    nouvil.style.fontSize = value +'px';
    if(scrollY >= 64){
        nouvil.style.fontSize = 64 +'px';
        nouvil.style.position= 'fixed'
        if(scrollY >= 478){
            nouvil.style.disblay= "none"
        }else{
            nouvil.style.position= 'block'

        }
        if(scrollY >=127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
           
        }
    }
}


