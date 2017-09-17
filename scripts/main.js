/*
HackMIT project script file
Created by Rodrigo Carrillo-Sanchez 9/16/2017 5:00pm
*/

// Declaring variables that will be needed
var guestCount = 0
var status = "lit"
var newGuestIcon = 'images/new-guest-icon.png'
var guestLeaveIcon = 'images/guest-leave-icon.png'
var policeIcon = 'images/police-icon.png'
var troubleIcon = 'images/trouble-icon.png'
var transportIcon = 'images/transport-icon.png'

var myImage = document.querySelector('img');
var myHeading = document.querySelector('h1');

var inButton = document.getElementById("guestIn");
var outButton = document.getElementById("guestOut");

var mailingList = prompt("Mailing list to notify: ", "default-email@email.com");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/solo-cup.png') {
      myImage.setAttribute ('src','images/smirnoff-ice.jpeg');
    }
    else {
      myImage.setAttribute ('src','images/solo-cup.png');
    }
}

inButton.onclick = function() {
    guestCount ++;
    if (guestCount%25 === 0){
        window.open(`mailto:${mailingList}?subject=[Party] Attendance at ${guestCount}`)    
    }
    myHeading.textContent = guestCount;    
}

outButton.onclick = function() {
    if (guestCount > 0){
        guestCount --;
    }
    myHeading.textContent = guestCount;
}

var policeButton = document.getElementById("police");
var transportButton = document.getElementById("transport");

policeButton.onclick = function() {
    alert("The police are coming.")
    window.open(`mailto:${mailingList}?subject=[Party] Police eom`)    
    status = "cops"    
}

transportButton.onclick = function() {
    alert("A transport is being called.")
    window.open(`mailto:${mailingList}?subject=[Party] Transport eom`)    
    status = "transport"
}

