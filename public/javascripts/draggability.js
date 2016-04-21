var dragged;

$("#view-btn").click(function(e) {
e.preventDefault();
console.log('you clicked it')
console.log(this)
var contents = $(this).data('contents');
var attrmethod = $(this).attr('data-contents');
    console.log(data);
    console.log(attrmethod);
$('#viewer').append(contents)
});

$('#build-btn').click(function() {
  var newRow = $('<div class="row"></div>');
  var dropDiv = $('<div class="dropzone"></div>');
  $(newRow).append('<div class="dropzone" style="margin-right: 2px"></div>');
  $(newRow).append('<div class="dropzone" style="margin-left: 2px; margin-right: 2px"></div>');
  $(newRow).append('<div class="dropzone" style="margin-left: 2px; margin-right: 2px"></div>');
  $(newRow).append('<div class="dropzone" style="margin-left: 2px"></div>');
  $('#zone-container').append(newRow);
  console.log('we built this city')
})

/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it'
    if ( event.target.id == "delete-box" ) {
        event.target.style.border = "1px solid red";
    }

    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "#337ab7";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.id == "delete-box" ) {
        event.target.style.border = "1px dashed white";
    }

    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.id == "delete-box" ) {
        dragged.remove();
        event.target.style.border = "1px dashed white";

    }

    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );

    }

}, false);
