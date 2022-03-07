
  function validateInput () {
    var d = parseInt(document.getElementById("DOB").value);
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
      checkOK = "false";
    }
    if(checkOK == "false") {
      return false;
    } 
    
    if (checkOK == "true") {
      var century = Math.floor(y/100);
      // dow stands for day of the week
     var dow = parseInt(( ( (century/4) -2*century-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) % 7);
      // const nameM = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "", "Kwame" ];
      // const nameF = ["Akosua", "Adwoa", "Abenaa", "Akua", "Akua", "Afua", "Ama"];

      const DOB = ["sunday", "monday", "tuesday","wednesday","thursday","friday","saturday"];
      // const gender = ["female", "male"];
      // Akan name for females.
      if (s = f && dow = 0) {
        alert ("Your Akan Name is Akosua.");
      }
      if (s = f && dow = 1) {
        alert ("Your Akan Name is Adwoa.");
      }
      if (s = f && dow = 2) {
        alert ("Your Akan Name is Abenaa.");
      }
      if (s = f && dow = 3 {
        alert ("Your Akan Name is Akua.");
      }
      if (s = f && dow = 4) {
        alert ("Your Akan Name is Yaa.");
      }
      if (s = f && dow = 5) {
        alert ("Your Akan Name is Afua"); 
      }
      if (s = f && dow = 6) {
        alert ("Your Akan Name is Ama");
      }
      if (s = f && dow = 6) {
        alert ("Your Akan Name is Kwasi");
      }
       (s = f && dow = 0) {
        alert ("Your Akan Name is ");
      }
      if (s = f && dow = 1) {
        alert ("Your Akan Name is Kwadwo");
      }
      if (s = f && dow = 2) {
        alert ("Your Akan Name is Kwabena");
      }
      
      if (s = f && dow = 3) {
        alert ("Your Akan Name is Kwaku");
      }
      if (s = f && dow = 4) {
        alert ("Your Akan Name is Yaw"); 
      }
      if (s = f && dow = 5) {
        alert ("Your Akan Name is Kofi");
      }
      if (s = f && dow = 6) {
        alert ("Your Akan Name is Kwame");
      }




    }
    
  }

 
  