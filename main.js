var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(clickevent) {
    var srcF = clickevent.target.getAttribute('src');
    displayImage(srcF);
  }
}

function displayImage(srcF) {
  displayedImage.setAttribute('src', srcF);
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  var btnClass = btn.getAttribute('class');
  if(btnClass==='dark') {
  btn.setAttribute('class','light');
  btn.textContent = 'Lighten';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
