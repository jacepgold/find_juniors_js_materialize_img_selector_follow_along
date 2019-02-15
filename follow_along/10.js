// First we assign our display elements (the picture and caption) to a variable
var image = document.getElementById('image');
var caption = document.getElementById('caption');

// Let's create some variables for our buttons
var dog = document.getElementById('dog');
var ferret = document.getElementById('ferret');
var chewy = document.getElementById('chewbacca');

/*
  Now we add logic to change the picture when clicking a button
  These are called Anonymous Functions when there is no name

  ------

  Sweet! Almost done!
  Next, let's do the same for the caption and alt tag
  Remember, the caption and alt tag will be the same
  The caption can stay the same or we can tell the browser
  what to display rather than it finding out based
  on the alt tag speeding it up (although at this level
  it won't make a difference)

  We will also clean up our code deleting what's not being used
*/

function changeImage(e, newImg, newCaption) {
  e.preventDefault();
  console.log('caption = ' + newCaption)
  image.setAttribute('alt', newCaption);
  image.setAttribute('src', `images/${newImg}.jpg`);
  console.log(image);
  caption.innerHTML = caption;
}

// Add onClick events for each button
dog.onclick = function() { changeImage(event, 'dog', 'Adorable Puppy') }
ferret.onclick = function() { changeImage(event, 'ferret', 'Mysterious Ferret') }
chewy.onclick = function() { changeImage(event, 'chewy', 'Chewy Chewbacca') }