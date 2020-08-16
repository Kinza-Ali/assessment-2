function disable1() {
    
    document.getElementById("checkbox2").disabled = true;
    document.getElementById("numb2").disabled = true;
  }
  
  function disable2() {
    
    document.getElementById("checkbox1").disabled = true;
    document.getElementById("numb1").disabled = true;
  }
  
  function disable3() {
    
    document.getElementById("checkbox4").disabled = true;
    document.getElementById("numb4").disabled = true;
  }
  
  function disable4() {
    
    document.getElementById("checkbox3").disabled = true;
    document.getElementById("numb3").disabled = true;
  }
  
  function disable5() {
    
    document.getElementById("checkbox6").disabled = true;
    document.getElementById("numb6").disabled = true;
  }
  
  function disable6() {
    
    document.getElementById("checkbox5").disabled = true;
    document.getElementById("numb5").disabled = true;
  }
  
  function disable7() {
    
    document.getElementById("checkbox8").disabled = true;
    document.getElementById("numb8").disabled = true;
  }
  
  function disable8() {
    
    document.getElementById("checkbox7").disabled = true;
    document.getElementById("numb7").disabled = true;
  }
  
  function disable9() {
    
    document.getElementById("checkbox10").disabled = true;
    document.getElementById("numb10").disabled = true;
  }
  
  function disable10() {
    
    document.getElementById("checkbox9").disabled = true;
    document.getElementById("numb9").disabled = true;
  }
  
  function disable11() {
    
    document.getElementById("checkbox12").disabled = true;
    document.getElementById("numb12").disabled = true;
  }
  
  function disable12() {
    
    document.getElementById("checkbox11").disabled = true;
    document.getElementById("numb11").disabled = true;
  }
  
  function disable13() {

    document.getElementById("checkbox14").disabled = true;
    document.getElementById("numb14").disabled = true;
  }
  
  function disable14() {
  
    document.getElementById("checkbox13").disabled = true;
    document.getElementById("numb13").disabled = true;
  }
 function validation() {
    var per1 = document.getElementById("numb1").value;
    var per2 = document.getElementById("numb3").value;
    var per3 = document.getElementById("numb5").value;
    var per4 = document.getElementById("numb7").value;
    var per5 = document.getElementById("numb9").value;
    var per6 = document.getElementById("numb11").value;
    var per7 = document.getElementById("numb13").value;
  
    var flat1 = document.getElementById("numb2").value;
    var flat2 = document.getElementById("numb4").value;
    var flat3 = document.getElementById("numb6").value;
    var flat4 = document.getElementById("numb8").value;
    var flat5 = document.getElementById("numb10").value;
    var flat6 = document.getElementById("numb12").value;
    var flat7 = document.getElementById("numb14").value;
    if (
      per1 >= 0 &&
      per1 <= 100 &&
      per2 >= 0 &&
      per2 <= 100 &&
      per3 >= 0 &&
      per3 <= 100 &&
      per4 >= 0 &&
      per4 <= 100 &&
      per5 >= 0 &&
      per5 <= 100 &&
      per6 >= 0 &&
      per6 <= 100 &&
      per7 >= 0 &&
      per7 <= 100 &&
      flat1 >= 0 &&
      flat2 >= 0 &&
      flat3 >= 0 &&
      flat4 >= 0 &&
      flat5 >= 0 &&
      flat6 >= 0 &&
      flat7 >= 0
    ) {
      alert("Value Submitted");
    } else {
      alert(
        "Enter again!"
      );
    }
  }
  