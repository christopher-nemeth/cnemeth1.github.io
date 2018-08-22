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

var img = document.getElementById('myImg')
// var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")
img.onclick = function(){
    modal.style.display = "flex";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none"
}