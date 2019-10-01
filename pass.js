

function checkPass()
  {
    let pass1 = document.getElementById('pass1').value
    let pass2 = document.getElementById('pass2').value
    if(pass2 != pass1 || pass1.length < 8)
      {
        if(pass2 != pass1 && pass1.length < 8)
          {
            window.alert("Password too short and does not match");
          }
        else if(pass2 != pass1)
          {
            window.alert("Passwords do not match");
          }
        else if(pass1.length < 8)
          {
            window.alert("Password must be at least 8 characters");
          }
      }
    else {
      window.alert("Password accepted")
    }

  }
