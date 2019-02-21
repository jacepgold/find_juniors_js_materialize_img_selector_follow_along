// First we assign our display elements (the picture and caption) to a variable
var image = document.getElementById('image');
var caption = document.getElementById('caption');
var newImg = null;

// Let's create some variables for our buttons
var dog = document.getElementById('dog');
var ferret = document.getElementById('ferret');
var chewy = document.getElementById('chewy');

/*
  Now we add logic to change the picture when clicking a button
  These are called Anonymous Functions when there is no name

  ------

  Alright, next we will set newImg to equal the file name to use
  We will console.log to make sure it is doing it right.

  Note that the image must be named correctly. To keep it simple,
  I name all mine chewy.jpg, dog.jpg and ferret.jpg all lowercase
*/

dog.addEventListener('click', function (event) {
  event.preventDefault();
  newImg = 'dog.jpg';
  console.log('new image = ' + newImg);
});

ferret.addEventListener('click', function (event) {
  event.preventDefault();
  newImg = 'ferret.jpg';
  console.log('new image = ' + newImg);
});

chewy.addEventListener('click', function (event) {
  event.preventDefault();
  newImg = 'chewy.jpg';
  console.log('new image = ' + newImg);
});