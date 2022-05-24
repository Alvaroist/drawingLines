var arrowKey={ /*variable declaration area*/
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var aCanvas = document.getElementById("areaCanvas");
var resetButton = document.getElementById("resetButton");
var area = aCanvas.getContext("2d");
var x1 = 150;/*centro del lienzo*/
var y1 = 150;
var x2 = 150;
var y2 = 150;
/*centro del lienzo*/
var color="red";

drawOneLine(color,x1-1,y1-1,x2+1,y2+1,area);/*indica donde esta el cursor*/
document.addEventListener("keyup",keyPressed);
document.addEventListener("click",reset);

function drawOneLine(color,x1,y1,x2,y2,panel)
{
  panel.beginPath();
  panel.strongStyle=color;
  panel.lineWidth=4;
  panel.moveTo(x1,y1);
  panel.lineTo(x2,y2);
  panel.stroke();
  panel.closePath();
}

function reset()
{
  area.clearRect(0,0,300,300);
  drawOneLine(color,x1-1,y1-1,x2+1,y2+1,area);
}

function keyPressed(evento)
{
  var distance=10;
  console.log(evento.keyCode);
  switch (evento.keyCode)
  {
    case arrowKey.UP:
      if (y2>=10){
        y2 = y2 - distance;
        drawOneLine(color, x1, y1, x2, y2, area);
        x1=x2;
        y1=y2;
        break;
      }else{
        x1=x2;
        y1=y2;
        break;
      }
    case arrowKey.DOWN:
      if(y2<=290){
        y2 = y2 + distance;
        drawOneLine(color, x1, y1, x2, y2, area);
        x1=x2;
        y1=y2;
        break;
      }
      else{
        x1=x2;
        y1=y2;
        break;
      }
    case arrowKey.LEFT:
      if(x2>=10){
        x2 = x2 - distance;
        drawOneLine(color, x1, y1, x2, y2, area);
        x1=x2;
        y1=y2;
        break;
      }
      else{
        x1=x2;
        y1=y2;
        break;
      }
    case arrowKey.RIGHT:
      if(x2<=290){
        x2 = x2 + distance;
        drawOneLine(color, x1, y1, x2, y2, area);
        x1 = x2;
        y1 = y2;
        break;
      }
      else{
        x1=x2;
        y1=y2;
        break;
      }
  }
}
