!function e(r,t,n){function a(d,i){if(!t[d]){if(!r[d]){var l="function"==typeof require&&require;if(!i&&l)return l(d,!0);if(o)return o(d,!0);var s=new Error("Cannot find module '"+d+"'");throw s.code="MODULE_NOT_FOUND",s}var c=t[d]={exports:{}};r[d][0].call(c.exports,function(e){var t=r[d][1][e];return a(t?t:e)},c,c.exports,e,r,t,n)}return t[d].exports}for(var o="function"==typeof require&&require,d=0;d<n.length;d++)a(n[d]);return a}({1:[function(e,r,t){"use strict";function n(e,r){for(i=0;i<=15;i++){var t='<img src="images/'+r+'_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />',n=t;T.push(n)}$(e).append(T)}function a(e,r,t){$(e).bind("DOMSubtreeModified",function(a){if(a.target.innerHTML<=0)if(1>t)n(e,r),t++;else if(!(t>=1))return null})}function o(){var e=f.parentNode;if("land-div playerOne"===e.className){var r=$(".playerOne").children().length;m=17-r}else if("land-div playerTwo"===e.className){var r=$(".playerTwo").children().length;b=17-r}else if("land-div playerThree"===e.className){var r=$(".playerThree").children().length;O=17-r}else if("land-div playerFour"===e.className){var r=$(".playerFour").children().length;N=17-r}}function d(e){var r=$('<div class="dropzoneOne" id="second-grid-top" ondragover="event.preventDefault()"></div>'),t=$('<div class="dropzoneOne" id="second-grid-left" ondragover="event.preventDefault()"></div>'),n=$('<div class="dropzoneOne" id="second-grid-right" ondragover="event.preventDefault()"></div>'),a=$('<div class="dropzoneOne" id="second-grid-bottom" ondragover="event.preventDefault()"></div>'),o=e.target;$(o).append(r,t,n,a)}function l(e){e.target.style.opacity=.5}function s(e){f=e.target,e.target.style.opacity=.5}function c(e){e.target.style.opacity=""}function u(e){e.preventDefault()}function g(e){"dropzone"===e.target.className?e.target.style.background="rgba(90, 252, 87, .5)":"dropzoneOne"===e.target.className&&(e.target.style.background="rgba(90, 252, 87, .5)")}function p(e){"dropzone"===e.target.className?e.target.style.background="":"dropzoneOne"===e.target.className&&(e.target.style.background="")}function v(e){if(e.preventDefault(),"dropzone"===e.target.className){e.target.style.background="",f.parentNode.removeChild(f),e.target.appendChild(f);e.target;d(e),f.setAttribute("draggable",!1),y++,y>=h&&$(".dropzone").removeClass("dropzone")}else"dropzoneOne"===e.target.className&&(e.target.style.background="",o(),f.parentNode.removeChild(f),e.target.appendChild(f),f.setAttribute("draggable",!1))}window.onload=function(){};var f,y=0,h=16,m=0,b=0,O=0,N=0,T=[];a(".playerOne","black",0),a(".playerTwo","red",0),a(".playerThree","white",0),a(".playerFour","blue",0),document.addEventListener("drag",l,!1),document.addEventListener("dragstart",s,!1),document.addEventListener("dragend",c,!1),document.addEventListener("dragover",u,!1),document.addEventListener("dragenter",g,!1),document.addEventListener("dragleave",p,!1),document.addEventListener("drop",v,!1),$("#ruleButton").click(function(){$(".almighty-rules").fadeToggle(600,"swing")}),$("#scoreButton").click(function(){$(".almighty-scores").fadeToggle(600,"swing"),$(".pOneScore").text("Player One: "+m),$(".pTwoScore").text("Player Two: "+b),$(".pThreeScore").text("Player Three: "+O),$(".pFourScore").text("Player Four: "+N)})},{}]},{},[1]);