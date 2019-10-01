
function changeColor()
  {
    let r =  document.getElementById('redB').value
    let g =  document.getElementById('greenB').value
    let b =  document.getElementById('blueB').value
    let width =  document.getElementById('widthB').value
    document.body.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.borderWidth = width;

  }

function changeBGColor()
  {
    let r1 =  document.getElementById('redBG').value
    let g1 =  document.getElementById('greenBG').value
    let b1 =  document.getElementById('blueBG').value
    document.body.style.backgroundColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
  }
