// First we assign our display elements (the picture and caption) to a variable
var image = document.getElementById('the-image');
var caption = document.getElementById('caption');

// Let's create a variable for our buttons wrapper
var selectButtons = document.getElementById('select-btns');

/*
  Now we add logic to change the picture when clicking a button
  These are called Anonymous Functions when there is no name

  ------

  What about if we eventually have TONS of images?
  Let's clean up the code to make it so we only have to
  change our HTML!

  1. Change our HTML:
    1. Add an ID to our UL
       - <ul class="right" id="select-btns">
    2. Add data-caption to each <a>
       - <a href="#" id="dog" data-caption="Adorable Puppy">Dog</a>
       - ... data-caption="Mysterious Ferret"
       - ... data-caption="ARRGGGHHHH"

  2. Create variable var select-btns and remove dog, ferret, and chewy

  3. Remove all our onclick events and replace with a single
      eventListener for select-btns w/ an anonymous function

  4. Move e.preventDefault() to our anonymous function and
      create two variables for newImg and newCaption

  5. We will call changeImage(newImg, newCaption) and we're done!

  We now have a fully working application!
*/

function changeImage(newImg, newCaption) {
  console.log('caption = ' + newCaption)
  image.setAttribute('alt', newCaption);
  image.setAttribute('src', `images/${newImg}.jpg`);
  console.log(image);
  caption.innerHTML = newCaption;
}

// Add onClick events for each button
selectButtons.addEventListener('click', function(e) {
  e.preventDefault();

  var newImg = e.target.id;
  var newCaption = e.target.getAttribute('data-caption');
  changeImage(newImg, newCaption);
});