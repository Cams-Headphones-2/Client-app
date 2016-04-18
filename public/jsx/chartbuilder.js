
// begin window.onload funtion
window.onload = function() {

}
// global variables
var placementTurn=0;
var placementTurnTotal=16;
var dragged;
var playerOneScore=0, playerTwoScore=0, playerThreeScore=0, playerFourScore=0;
var tokenArray = [ ];

// push stack of images into array, print array of images once
// edit createTokens to push images into array, then print array once??
// it may stack images just like with land pieces, but it will allow
// for stacks of pieces just like needed to play the game

// TESTING function createTokens
function createTokens(playerClass, color) {
  for(i=0;i <=15; i++) {
    var imgTag = '<img src="images/'+color+'_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />';
    var tokenColor = imgTag;
    tokenArray.push(tokenColor);
  }
  $(playerClass).append(tokenArray);
}
// end TESTING function

// Production version of function
// Creates tokens when the player's land pieces run out
// function createTokens(playerClass, color) {
//   for(i=0;i <=15; i++) {
//     var imgTag = '<img src="images/'+color+'_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />';
//     var tokenColor = imgTag;
//     $(playerClass).append(tokenColor);
//   }
// }
// DOM observer that fires once player column is empty
// and only once
function monitorAPlayer(playerClass, color, fireCount) {
  $(playerClass).bind('DOMSubtreeModified', function(e) {
    if(e.target.innerHTML <= 0) {
      if(fireCount < 1) {
        createTokens(playerClass, color)
        fireCount++;
      } else if (fireCount >= 1) {
        // console.log('These aren\'t the droids you\'re looking for.');
      } else {
        return null;
      }
    }
  });
}
// track player scores
function scoreboardTracking() {
  var playerParentNode = dragged.parentNode;
  // console.log(dragged.parentNode.className);
    if(playerParentNode.className === 'land-div playerOne') {
      var playerTotalTokens = $('.playerOne').children().length;
      playerOneScore = 17 - playerTotalTokens;
      // console.log(playerOneScore);
    } else if(playerParentNode.className === 'land-div playerTwo') {
      var playerTotalTokens = $('.playerTwo').children().length;
      playerTwoScore = 17 - playerTotalTokens;
      // console.log(playerTwoScore);
    } else if(playerParentNode.className === 'land-div playerThree') {
      var playerTotalTokens = $('.playerThree').children().length;
      playerThreeScore = 17 - playerTotalTokens;
      // console.log(playerThreeScore);
    } else if(playerParentNode.className === 'land-div playerFour') {
      var playerTotalTokens = $('.playerFour').children().length;
      playerFourScore = 17 - playerTotalTokens;
      // console.log(playerFourScore);
    } else {
      // console.log('wat');
    }
}
// create secondary grid once a land piece is dropped
function secondaryGrid(e) {
  var secondGridDivTop = $('<div class="dropzoneOne" id="second-grid-top" ondragover="event.preventDefault()"></div>');
  var secondGridDivLeft = $('<div class="dropzoneOne" id="second-grid-left" ondragover="event.preventDefault()"></div>');
  var secondGridDivRight = $('<div class="dropzoneOne" id="second-grid-right" ondragover="event.preventDefault()"></div>');
  var secondGridDivBottom = $('<div class="dropzoneOne" id="second-grid-bottom" ondragover="event.preventDefault()"></div>');
  var divTarget = e.target;
  $(divTarget).append(secondGridDivTop, secondGridDivLeft, secondGridDivRight, secondGridDivBottom); // add second grid over the first to lock pieces into position
}
// player one test
monitorAPlayer('.playerOne', 'black', 0);
monitorAPlayer('.playerTwo', 'red', 0);
monitorAPlayer('.playerThree', 'white', 0);
monitorAPlayer('.playerFour', 'blue', 0);

// draggable functions
function drag(e) {
  e.target.style.opacity = 0.5;
}
function dragStart(e) {
  // store the drag target element in var dragged
  dragged = e.target;
  // lower transparency to .5 as visual feedback
  e.target.style.opacity = 0.5;
}
function dragEnd(e) {
  // reset transparency when element is dropped
  e.target.style.opacity = '';
}
function dragOver(e) {
  // prevent default action
  e.preventDefault();
}
function dragEnter(e) {
  if(e.target.className === "dropzone") {
    e.target.style.background = "rgba(90, 252, 87, .5)";
  } else if(e.target.className === 'dropzoneOne') {
    e.target.style.background = "rgba(90, 252, 87, .5)";
  }
}
function dragLeave(e) {
  if(e.target.className === "dropzone") {
    e.target.style.background = "";
  } else if(e.target.className === 'dropzoneOne') {
    e.target.style.background = "";
  }
}
function drop(e) {
  e.preventDefault();
  if(e.target.className === "dropzone") {
    e.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    var divTarget = e.target;
    secondaryGrid(e);
    dragged.setAttribute('draggable', false);     // remove draggable ability from board pieces once they are placed
    placementTurn++;                              // add one to placementTurn
    if(placementTurn >= placementTurnTotal) {     // used as a check to see if the max number of board tiles have been played
      $('.dropzone').removeClass('dropzone');     // remove dropzone classes from all divs to prevent movement of board
      // console.log("We go in! We kill!");          // We go iiinnnnn. We kiiilllll.
    } else {
      // console.log("Soon my dog of war...");       // You just... you just wait!
    }
  } else if(e.target.className === "dropzoneOne") {
    e.target.style.background = "";
    scoreboardTracking();
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    dragged.setAttribute('draggable', false);
  }
}
function touchStart(e) {

}

// events fired on draggable target
document.addEventListener('drag', drag, false);
document.addEventListener('dragstart', dragStart, false);
document.addEventListener('dragend', dragEnd, false);
document.addEventListener('dragover', dragOver, false);
document.addEventListener('dragenter', dragEnter, false);
document.addEventListener('dragleave', dragLeave, false);
document.addEventListener('drop', drop, false);
// document.addEventListener('touch', touchstart ,false);

// clickable rules and score button
$('#ruleButton').click(function() {
  $('.almighty-rules').fadeToggle(600,'swing');
});
$('#scoreButton').click(function() {
  $('.almighty-scores').fadeToggle(600,'swing');
  $('.pOneScore').text('Player One: '+playerOneScore);
  $('.pTwoScore').text('Player Two: '+playerTwoScore);
  $('.pThreeScore').text('Player Three: '+playerThreeScore);
  $('.pFourScore').text('Player Four: '+playerFourScore);
});
// end window.onLoad function

// on ~ press - display Rules
// document.addEventListener('keydown', function(e) {
//   var code = e.keyCode || e.keyWhich;
//   if(code === 192) {
//   $('.almighty-rules').fadeToggle(600,'swing');
// }
// });
// // on TAB press - display Scoreboard
// document.addEventListener('keydown', function(e) {
//   var code = e.keyCode || e.keyWhich;
//   if(code === 49) {
//     $('.almighty-scores').fadeToggle(600,'swing');
//   }
// });
// Notes
/*
*/
//  ------   mk img ------
// var img = $('<img src=""/>');
// -- change prop/attribute of img --
// img.prop('src', 'http://....');
// --- select a css class or DOM element and append img ---
