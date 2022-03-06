
  function validateInput () {
    var d = document.getElementById("DOB").value;
    var m = document.getElementById("month").value;
    var y = document.getElementById("year").value;
    var s = document.getElementById("gender").value;
    
    checkOK = "true";
    if (d<=0 || d>31) {
      alert("Please enter a valid date.");
      checkOK = "false";
    }
    if (m<=0 || m>12) {
      alert("Please enter a valid month.");
      checkOK = "false";
    }
    if (gender.value == ""){
      alert("Please select gender");
      checkOK= "false";
    }
    if(checkOK == "false") {
      return false;
    } 
    
    if (checkOK == "true") {
      var century = Math.floor(y/100);
      // dow stands for day of the week
     var dow = ( ( (century/4) -2*century-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) % 7;
      // const nameM = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "", "Kwame" ];
      // const nameF = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
      // const DOB = ["sunday", "monday", "tuesday","wednesday","thursday","friday","saturday"];
      // const gender = ["female", "male"];



    }
    
  }

 
  