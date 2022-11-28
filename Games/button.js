$(".basicBtn").click(function() {

  $(this).addClass("pressed");

  setTimeout(() => {
    $(this).removeClass("pressed");
  }, 1000);

});

var buttonCount = 0;

$(".counterBtn").click(function() {

  buttonCount++;
  $(".counterBtn").addClass("counterPressed");

  setTimeout(() => {
    $(".counterBtn").removeClass("counterPressed");
  }, 100);
  if (buttonCount < 100) {
    $(".counterTitle").text("You've pressed the button " + buttonCount + " times.");
  } else {
    if (buttonCount === 1000) {
      $(".counterTitle").text("You've wasted you're time.");
    } else {

      if (buttonCount === 10000) {
        $(".counterTitle").text("You've wasted you're time!");
      } else {
        $(".counterTitle").text("You've pressed the button " + buttonCount + " times!");
      }
    }
  }
});

$(".togMag").click(function() {
  $(".togMag").toggleClass("red");
  $(".togMag").toggleClass("magenta");
});
$(".togCy").click(function() {
  $(".togCy").toggleClass("blue");
  $(".togCy").toggleClass("cyan");
});
$(".togYel").click(function() {
  $(".togYel").toggleClass("yellow");
  $(".togYel").toggleClass("green");
});

$("#colorChanger").click(function() {
  var hexCode = newHexCode();

  $("#colorChanger").css("background-color", hexCode);
});

function newHexCode() {
  var colorCode;
  var hex1 = hexSnippet();
  var hex2 = hexSnippet();
  var hex3 = hexSnippet();
  var hex4 = hexSnippet();
  var hex5 = hexSnippet();
  var hex6 = hexSnippet();

  return colorCode = "#" + hex1 + hex2 + hex3 + hex4 + hex5 + hex6;
}

function hexSnippet() {
  var snippet;
  var snippetString = "";
  snippet = Math.random();
  snippet = snippet * 16;
  snippet = Math.floor(snippet);

  if (snippet < 10) {
    return snippet;
  } else if (snippet == 10) {
    return "a";
  } else if (snippet == 11) {
    return "b";
  } else if (snippet == 12) {
    return "c";
  } else if (snippet == 13) {
    return "d";
  } else if (snippet == 14) {
    return "e";
  } else {
    return "f";
  }
}

$(".sound1").click(function() {
  var noise1 = new Audio("sounds/red.mp3");
  noise1.play();
});
$(".sound2").click(function() {
  var noise2 = new Audio("sounds/blue.mp3");
  noise2.play();
});
$(".sound3").click(function() {
  var noise3 = new Audio("sounds/green.mp3");
  noise3.play();
});
$(".sound4").click(function() {
  var noise4 = new Audio("sounds/yellow.mp3");
  noise4.play();
});

$(".BB1").click(function() {
  $(".BB3").toggleClass("BBpressed");
  $(".BB5").toggleClass("BBpressed");
});
$(".BB2").click(function() {
  $(".BB4").toggleClass("BBpressed");
  $(".BB3").toggleClass("BBpressed");
});
$(".BB3").click(function() {
  $(".BB1").toggleClass("BBpressed");
  $(".BB2").toggleClass("BBpressed");
});
$(".BB4").click(function() {
  $(".BB2").toggleClass("BBpressed");
  $(".BB5").toggleClass("BBpressed");
});
$(".BB5").click(function() {
  $(".BB1").toggleClass("BBpressed");
  $(".BB4").toggleClass("BBpressed");
});

$(".Magic8Ball").click(function() {
  $(".Magic8Ball").addClass("Magic8BallPressed");
var magic8BallPhrase = giveFortune();
  $(".Magic8Ball").html(magic8BallPhrase);
  setTimeout(() => {
    $(".Magic8Ball").removeClass("Magic8BallPressed");
  }, 650);

});

function giveFortune() {
  var fortuneNumber;
  var fortune;
  fortuneNumber = Math.random();
  fortuneNumber = fortuneNumber * 8;
  fortuneNumber = Math.floor(fortuneNumber);
  switch (fortuneNumber) {
    case 0:
      fortune = "The stars are in your favor."
      break;
    case 1:
      fortune = "The sun shines upon you."
      break;
    case 2:
      fortune = "Treacherous waters lie ahead.";
      break;
    case 3:
      fortune = "The wind howls a warning.";
      break;
    case 4:
      fortune = "Sometimes a fish is a flower.";
      break;
    case 5:
      fortune = "Snow blinds those who look.";
      break;
    case 6:
      fortune = "I'm a button, not fate.";
      break;
    default:
        fortune = "Try again, later";
  }

  return fortune;
}

var positionX;
var positionY;
$(".trickyButton").click(function(){

positionX = getXCord();
positionY = getYCord();
$(".trickyButton").css("top", positionY);
$(".trickyButton").css("left", positionX);

});

function getXCord ()
{
var xCord = Math.random();
xCord = xCord * 9;
xCord = Math.floor(xCord);
xCord = (xCord + 1) * 10;
return xCord + "%";
}
function getYCord()
{
var yCord = Math.random();
yCord = yCord * 451;
yCord = Math.floor(yCord);
return yCord + "px";
}

$(".togAllBtn1").click(function() {

  $(".togAllBtn2").toggleClass("toggleAllBtnPressed");
  $(".togAllBtn3").toggleClass("toggleAllBtnPressed");

});
$(".togAllBtn2").click(function() {

  $(".togAllBtn1").toggleClass("toggleAllBtnPressed");
  $(".togAllBtn3").toggleClass("toggleAllBtnPressed");

});
$(".togAllBtn3").click(function() {

  $(".togAllBtn2").toggleClass("toggleAllBtnPressed");
  $(".togAllBtn1").toggleClass("toggleAllBtnPressed");

});
$(".togAllBtn1").hover(function()
{
  $(".togAllBtn2").addClass("togHover");
  $(".togAllBtn3").addClass("togHover");
},
function()
{
  $(".togAllBtn2").removeClass("togHover");
  $(".togAllBtn3").removeClass("togHover");
});
$(".togAllBtn2").hover(function()
{
  $(".togAllBtn1").addClass("togHover");
  $(".togAllBtn3").addClass("togHover");
},
function()
{
  $(".togAllBtn1").removeClass("togHover");
  $(".togAllBtn3").removeClass("togHover");
});
$(".togAllBtn3").hover(function()
{
  $(".togAllBtn2").addClass("togHover");
  $(".togAllBtn1").addClass("togHover");
},
function()
{
  $(".togAllBtn2").removeClass("togHover");
  $(".togAllBtn1").removeClass("togHover");
});

var size = 20;
var sizeString;
$(".sizeBtn").click(function()
{
  size+=5;
  sizeString = size + "px";
  $(".sizeBtn").css("width", size);
  $(".sizeBtn").css("height", size);

});
