var image = document.getElementById('the-image');
var caption = document.getElementById('caption');
var selectButtons = document.getElementById('select-btns');

function changeImage(newImg, newCaption) {
  console.log('caption = ' + newCaption)
  image.setAttribute('alt', newCaption);
  image.setAttribute('src', `images/${newImg}.jpg`);
  console.log(image);
  caption.innerHTML = newCaption;
}

selectButtons.addEventListener('click', function (e) {
  e.preventDefault();

  var newImg = e.target.id;
  var newCaption = e.target.getAttribute('data-caption');
  changeImage(newImg, newCaption);
});