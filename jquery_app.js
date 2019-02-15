$(document).ready(function() {
  function changeImg(img, caption) {
    $('#image').attr({
      'src': 'images/' + img.toLowerCase() + '.jpg',
      'alt': caption,
    });
    
    $("#caption").text(caption);
  }

  $("#select-btns").click(function (e) {
    e.preventDefault();
    // This will show us the element so we can destructure it
    // to get the values needed
    console.table(e.target);
    changeImg(e.target.innerText, e.target.dataset.caption);
  });
});