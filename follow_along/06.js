// First we assign our display elements (the picture and caption) to a variable
var image = document.getElementById('image');
var caption = document.getElementById('caption');
var newImg = null;

// Let's create some variables for our buttons
var dog = document.getElementById('dog');
var ferret = document.getElementById('ferret');
var chewy = document.getElementById('chewbacca');

/*
  Now we add logic to change the picture when clicking a button
  These are called Anonymous Functions when there is no name

  ------

  Sweet! Now how can we easily make that and the Alt tag
  be the same value?
*/

dog.addEventListener('click', function (event) {
  event.preventDefault();
  newImg = 'dog';
  console.log(image);
  image.setAttribute('alt', 'Adorable Puppy');
  image.setAttribute('src', `images/${newImg}.jpg`);
  caption.innerHTML = image.getAttribute('alt');
});

ferret.addEventListener('click', function (event) {
  event.preventDefault();
  newImg = 'ferret';
  console.log(image);
  image.setAttribute('alt', 'Mysterious Ferret');
  image.setAttribute('src', `images/${newImg}.jpg`);
  caption.innerHTML = image.getAttribute('alt');
});

chewy.addEventListener('click', function (event) {
  event.preventDefault();
  newImg = 'chewy';
  console.log(image);
  image.setAttribute('alt', 'Chewy Chewbacca');
  image.setAttribute('src', `images/${newImg}.jpg`);
  caption.innerHTML = image.getAttribute('alt');
});