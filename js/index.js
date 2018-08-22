$(document).ready(function () {
    console.log( "ready!" );

// event for the form to appear
$("#formLink").click(revealForm)

// Reveals form on click
function revealForm(event){
	event.preventDefault();
	$('#formDrop').slideDown()
	$('#formDrop').show()
  }

  // Add smooth scrolling to all links
  $(".scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== ".scroll") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var modal = document.getElementById('myModal')
var resumeLink = document.querySelector('#resume')
var captionText = document.getElementById('caption')

resumeLink.onClick = function () {
    modal.style.display = 'flex'
}

var span = document.getElementsByClassName('close')[0];

span.onClick = function() {
  modal.style.display = 'none'
}