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

  Does this seem like we have typed too much?
  It looks like it is all the same except one
  line in each anonymous function...

  Let's create a named function instead!
  Remember, we need to pass (event) in the function
  I will simply call abbreviate it to "e"
*/

function changeImage(e) {
  e.preventDefault();
  alert('entered changeImage()');
  newImg = 'dog';
  image.setAttribute('alt', 'Adorable Puppy');
  image.setAttribute('src', `images/${newImg}.jpg`);
  caption.innerHTML = image.getAttribute('alt');
}

// Add onClick events for each button
dog.onclick = function() { changeImage(event) }
ferret.onclick = function() { changeImage(event) }
chew.onclick = function() { changeImage(event) }