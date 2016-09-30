(function(){

  'use strict';

  document.getElementById('start').addEventListener('click', addElement)

  var letterContainer = document.getElementById('right_letters');

  function addElement () {
    // create a new div element
    // and give it some content
    var newLetter = document.createElement("span");

    letterContainer.appendChild(newLetter);
    //var newContent = document.createTextNode("Hi there and greetings!");
    // newDiv.appendChild(newContent); //add the text node to the newly created div.

    // add the newly created element and its content into the DOM
    // var currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
  }

})();

// document.body.onload = addElement;

document.getElementById('start').addEventListener('click', addElement)

function addElement () {
  console.log('firing');
  // create a new div element
  // and give it some content
  // var newDiv = document.createElement("div");
  // var newContent = document.createTextNode("Hi there and greetings!");
  // newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  // var currentDiv = document.getElementById("div1");
  // document.body.insertBefore(newDiv, currentDiv);
}

// addEventListener('click', currentDiv);
