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

  Wait! What happend there? It flashed quickly and didn't do anything
  This is because clinking an Anchor tag (link) has a specific default
  function with is to go to another page.

  To solve this, we add event.preventDefault(); which stopps it from
  doing what it is supposed to do so we can do our own logic
*/

dog.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);
});

ferret.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);
});

chewy.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);
});