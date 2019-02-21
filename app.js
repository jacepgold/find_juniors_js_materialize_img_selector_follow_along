// First we assign our display elements (the picture and caption) to a variable
var image = document.getElementById('image');
var caption = document.getElementById('caption');

// Let's create a variable for our buttons wrapper
var selectButtons = document.getElementById('select-btns');

// Now we add logic to change the picture when clicking a button
function changeImage(newImg, newCaption) {
  image.setAttribute('alt', newCaption);
  image.setAttribute('src', `images/${newImg}.jpg`);
  caption.innerHTML = newCaption;
}

// Add onClick events for each button
selectButtons.addEventListener('click', function (e) {
  e.preventDefault();

  var newImg = e.target.id;
  var newCaption = e.target.getAttribute('data-caption');
  changeImage(newImg, newCaption);
});