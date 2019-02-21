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

  Next we add console.log to see what happens
  To do this, we need to know WHAT happened, so
  we pass event into the function like this function(event)
*/

dog.addEventListener('click', function (event) {
  console.log(event);
});

ferret.addEventListener('click', function (event) {
  console.log(event);
});

chewy.addEventListener('click', function (event) {
  console.log(event);
});