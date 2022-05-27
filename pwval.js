function CheckPassword(inputtxt) {
  var passw = /^[1-10]/;
  if (inputtxt.value.match(passw)) {
    alert("Correct, try another...");
    return true;
  } else {
    alert("Wrong...!");
    return false;
  }
}
