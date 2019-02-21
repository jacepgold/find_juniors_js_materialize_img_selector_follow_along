// First we assign our display elements (the picture and caption) to a variable
var image = document.getElementById('image');
var caption = document.getElementById('caption');

// Let's create some variables for our buttons
var dog = document.getElementById('dog');
var ferret = document.getElementById('ferret');
var chewy = document.getElementById('chewy');

/*
  Now we add logic to change the picture when clicking a button
  These are called Anonymous Functions when there is no name

  ------

  Does this seem like we have typed too much?
  It looks like it is all the same except one
  line in each anonymous function...

  Alright, now how can we change the image for each item?
  Let's add more params to our changeImage() function!

  Also, we can delete newImg above since we are using
  create a param with the same name as the variable
  making the variable useless
*/

function changeImage(e, newImg) {
  e.preventDefault();
  console.log('to display = ' + newImg);
  image.setAttribute('alt', 'Adorable Puppy');
  image.setAttribute('src', `images/${newImg}.jpg`);
  console.log(image)
  caption.innerHTML = image.getAttribute('alt');
}

// Add onClick events for each button
dog.onclick = function() { changeImage(event, 'dog') }
ferret.onclick = function() { changeImage(event, 'ferret') }
chewy.onclick = function() { changeImage(event, 'chewy') }