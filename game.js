 var pattern = [];
 var score = -1;
 var playerPattern = 0;
 //
 var gameActive = false;
 // pattern = pickColor(pattern);

 $("h1").click(function() {
   playSequence(pattern);
   // pattern = pickColor(pattern);
   // playButton(pattern[pattern.length -1]);
 });

  $(document).keypress(function()
  {
    if(!gameActive)
    {
      pattern = [];
      score = -1;
      playerPattern = 0;
      pattern = pickColor(pattern);
      playSequence(pattern);
      gameActive = true;
      $("#level-title").html("Game Started");
    }
  });

  //This function detects user input and presses the buttons accordigly
  $(".btn").click(function() {

    var buttonPlayed = $(this).attr("id");

    if(gameActive)
    {
      playButton(buttonPlayed);

      if (buttonPlayed == pattern[playerPattern]) {
        playerPattern++;
      } else {
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 400);
        var gameOverSound = new Audio("sounds/wrong.mp3");
        gameOverSound.play();
        gameActive = false;

        $("#level-title").html("Game Over! Press any key to restart.");
      }
    }

    if (playerPattern == pattern.length) {
      pattern = pickColor(pattern);
      playSequence(pattern);
      playerPattern = 0;
      score++;
      $("#level-title").html("Current Score = " + score);

    }
    // Pattern.push(pickColor());
  });






/*************************************************************
                DECLARATION OF FUNCTIONS
**************************************************************/


 //function that plays whole sequence 1 button at a time
 function playSequence(sequence) {
   for (var i = 0; i < sequence.length; i++) {
     var currentSeq = sequence[i];
     var delay = (i + 2) * 400;

     switch (currentSeq) {
       case "red": //red
         setTimeout(() => {
           playButton("red");
         }, delay);
         break;
       case "yellow": //yellow
         setTimeout(() => {
           playButton("yellow");
         }, delay);
         break;
       case "green": // green
         setTimeout(() => {
           playButton("green");
         }, delay);
         break;
       case "blue":
         setTimeout(() => {
           playButton("blue");
         }, delay);
         break;
       default: //blue
         console.log(currentSeq);
     }
   }
 }


 //this function plays the correct sound for the button
 function playButton(colorButton) {

   $("#" + colorButton).addClass("pressed");

   setTimeout(() => {
     $("#" + colorButton).removeClass("pressed");
   }, 300);

   var audio = new Audio("sounds/" + colorButton + ".mp3");
   audio.play();
 }

 //function that adds to the array
 function pickColor(colorString) {

   var randomNumber = Math.random();
   randomNumber *= 4;
   randomNumber = Math.floor(randomNumber);
   switch (randomNumber) {
     case 1: //red

       colorString.push("red");

       break;
     case 2: //yellow

       colorString.push("yellow");

       break;
     case 3: // green

       colorString.push("green");

       break;
     default: //blue

       colorString.push("blue");
   }
   return colorString;
 }
