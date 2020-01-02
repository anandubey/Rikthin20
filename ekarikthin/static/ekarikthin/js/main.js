var navBar = document.getElementById('navbar');
eka_logo = document.getElementById('logo');
var landing = document.getElementById('landing');

window.onscroll = function changeClass(){
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    
    if(scrollPosY > 0) {
        navBar.classList.add("sticky_nav_on_scroll");
    } 
    else{
       navBar.classList.remove("sticky_nav_on_scroll");
    }

    if (scrollPosY > 719){  
        navBar.classList.add("small_nav");
        
    }
    else{
        navBar.classList.remove("small_nav");
        
    }

    landing.style.filter = "blur(" + (scrollPosY/120) + "px)";

    
    eka_logo.style.opacity = 1 - + window.pageYOffset/550;
}



function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}


var countDownDate = new Date("feb 5, 2020 09:00:00").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown_timer").innerHTML = days + " d   " + hours + " h   "
    + minutes + " m   " + seconds + " s   ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown_timer").innerHTML = "";
    }
}, 1000);






// Events Section Modal

var culturalModal = document.getElementsByClassName('cultural_modal')[0];
var technicalModal = document.getElementsByClassName('technical_modal')[0];
var gamingModal = document.getElementsByClassName('gaming_modal')[0];
var sportsModal = document.getElementsByClassName('sports_modal')[0];

var cultural_img = document.getElementById('culturalImg');
var technical_img = document.getElementById('technicalImg');
var gaming_img = document.getElementById('gamingImg');
var sports_img = document.getElementById('sportsImg');

var closeBtnC = document.getElementById('closeBtnC');
var closeBtnT = document.getElementById('closeBtnT');
var closeBtnG = document.getElementById('closeBtnG');
var closeBtnS = document.getElementById('closeBtnS');

cultural_img.addEventListener("click", function(){
    
    culturalModal.style.display = "flex";
});
technical_img.addEventListener("click", function(){

    technicalModal.style.display = "flex";
});
gaming_img.addEventListener("click", function(){
    
    gamingModal.style.display = "flex";
});
sports_img.addEventListener("click", function(){
    
    sportsModal.style.display = "flex";
});



function closeModal(){
    culturalModal.style.display = 'none';
    technicalModal.style.display = 'none';
    gamingModal.style.display = 'none';
    sportsModal.style.display = 'none';
}

//Listens to outside clilck

function outsideClick(e){
    if (e.target == culturalModal || e.target == technicalModal || e.target == gamingModal || e.target == sportsModal){
        culturalModal.style.display = 'none';
        technicalModal.style.display = 'none';
        gamingModal.style.display = 'none';
        sportsModal.style.display = 'none';
    }
    if(e.key === "Escape"){
        culturalModal.style.display = 'none';
        technicalModal.style.display = 'none';
        gamingModal.style.display = 'none';
        sportsModal.style.display = 'none';
    }
}

closeBtnC.addEventListener('click', closeModal);
closeBtnT.addEventListener('click', closeModal);
closeBtnG.addEventListener('click', closeModal);
closeBtnS.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);
document.addEventListener ('keydown', outsideClick);

// Gallery carousel

// Contacts


// Developers
var dev = document.getElementById("developers");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 2200) {
    dev.style.display = 'flex';
  } else {
    dev.style.display = 'none';
  }
};

window.addEventListener("scroll", myScrollFunc);


