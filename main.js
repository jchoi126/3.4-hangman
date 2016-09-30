(function(){

  'use strict';

  document.getElementById('start').addEventListener('click', addLetters)
  document.getElementById('submit').addEventListener('click', addCorrectLetter)

  var letterContainer = document.getElementById('right_letters');
  var letterFiller
  var randomWord = commonWords[Math.floor(Math.random()*commonWords.length)];

  function addLetters(){

    console.log("random word",randomWord);
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    for(var i = 0; i< randomWord.length; i++){
      var newLetter = document.createElement("span");
      newLetter.className = 'noLetter' ;
      newLetter.textContent = randomWord[i];
      letterContainer.appendChild(newLetter);
    }
  }

function addCorrectLetter(){
  letterFiller = document.getElementById('letterfield').value;
  console.log(letterFiller);
  for(var i = 0; i < randomWord.length; i++){
  if(letterContainer.children[i].textContent == letterFiller){
    console.log('yes');
    letterContainer.children[i].style.color = 'black';

  } else {

  }
}




}
})();
