
var images = ["c++ logo.png", "javascript-logo.png","jayhawk.png","ku eecs.png", "python logo.png"]
var counter = 0;


function imageBack()
  {
    if(counter == 0)
      {
        document.getElementById("img1").src = images[4];
        counter = 4;
      }
    else
      {
        document.getElementById("img1").src = images[counter-1];
        counter--;
      }

  }

function imageForward()
  {
    if(counter == 4)
      {
        document.getElementById("img1").src = images[0];
        counter = 0;
      }
    else
      {
        document.getElementById("img1").src = images[counter+1];
        counter++;
      }
  }
