/*
HackMIT project script file
Created by Rodrigo Carrillo-Sanchez 9/16/2017 5:00pm
*/

// Declaring variables that will be needed
var guestCount = 0
var newGuestIcon = 'images/new-guest-icon.png'
var guestLeaveIcon = 'images/guest-leave-icon.png'
var policeIcon = 'images/police-icon.png'
var troubleIcon = 'images/trouble-icon.png'
var transportIcon = 'images/transport-icon.png'


var myImage = document.querySelector('img');
var myHeading = document.querySelector('h1');

var inButton = document.getElementById("guestIn");
var outButton = document.getElementById("guestOut");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.jpg') {
      myImage.setAttribute ('src','images/firefox2.png');
    }
    else {
      myImage.setAttribute ('src','images/firefox-logo.jpg');
    }
}

inButton.onclick = function() {
    guestCount ++;
    myHeading.textContent = guestCount;    
}

outButton.onclick = function() {
    if (guestCount > 0){
        guestCount --;
    }
    myHeading.textContent = guestCount;
}

/*var guestImage = document.querySelector('img');
var guestCounter = document.querySelector('p')
guestImage.onclick = function(){
    var guestSrc = guestImage.getAttribute('src');
    if (guestSrc === newGuestIcon){
        guestCount ++;
    }
    if (guestSrc === guestLeaveIcon){
        guestCount --;
    }
    var guestC = guestCounter.getAttribute('id');
    if (guestC === "guestCount"){
        guestC.setAttribute('src', guestCount)
    }
}*/