
  function validateInput () {
    var d = document.getElementById("DOB").value;
    var m = document.getElementById("month").value;
    var y = document.getElementById("year").value;
    checkOK = "true";
    if (d<=0 || d>31) {
      alert("Please enter a valid date.");
      checkOK = "false";

    }
    if (m<=0 || m>12) {
      alert("Please enter a valid month.");
    }
    if(checkOK == "false") {
      return false;
    } 
    if (checkOK == "true") {
      var century = Math.floor(y/100);
    // alert(century);
    // dow stands for day of the week
    var dow = 
    }
    
  }

  {/* function getInputValue() {
    var inputDOB = document.getElementById("DOB").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;
    var finalResult = inputDOB + '' + inputMonth + '' + inputYear;
    document.getElementById("formResult").innerHTML = "This is the final result" +finalResult; 
    return getInputValue;
  } */}
  