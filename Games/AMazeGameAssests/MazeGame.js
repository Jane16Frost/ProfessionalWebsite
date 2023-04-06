
var windowHeight = window.innerHeight;
var ySquares = windowHeight / 128;
ySquares = Math.floor(ySquares);
ySquares --;

var windowWidth = window.innerWidth;
var xSquares = windowWidth / 128;
xSquares = Math.floor(xSquares);
xSquares-= 2;

var gameWindow = document.getElementsByClassName("gameWindow");

gameWindow[0].style.backgroundColor = "#0000ff";
gameWindow[0].style.height = (ySquares * 130) + "px";
gameWindow[0].style.width = (xSquares * 128) + "px";



  var newHtml = "<table>";

  for(var height = 0; height < ySquares; height++)
  {
    newHtml = newHtml + "<tr>"
    for(var width = 0; width < xSquares; width++)
      {
        newHtml = newHtml + "<td><img src=\"AMazeGameAssests\\Cover.png\" class = \"square\"></td>";
      }
     newHtml = newHtml + "</tr>";
  }

 newHtml = newHtml+"</table>";

gameWindow[0].innerHTML = newHtml;
