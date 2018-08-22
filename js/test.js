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