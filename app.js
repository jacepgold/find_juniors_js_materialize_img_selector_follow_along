/*
  @ Jace P Gold
  02/14/2019
  FIND Juniors JavaScript Img Selector Follow Along lessons
*/

// First we assign our display elements (the picture and caption) to a variable
var image = document.getElementById('the-image');
var caption = document.getElementById('caption');

// Let's create a variable for our buttons wrapper
var selectButtons = document.getElementById('select-btns');

// Now we add logic to change the picture when clicking a button

function changeImage(newImg, newCaption) {
  console.log('caption = ' + newCaption)
  image.setAttribute('alt', newCaption);
  image.setAttribute('src', `images/${newImg}.jpg`);
  console.log(image);
  caption.innerHTML = newCaption;
}

// Add onClick events for each button
selectButtons.addEventListener('click', function (e) {
  e.preventDefault();

  var newImg = e.target.id;
  var newCaption = e.target.getAttribute('data-caption');
  changeImage(newImg, newCaption);
});