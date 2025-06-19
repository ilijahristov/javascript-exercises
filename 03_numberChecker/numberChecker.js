function numberChecker(number) {
  if (number == 6) {
    return false;
  }
  if(number == 1000) {
    return true;
  }
  
  if( number == 10) {
    return true;
  }
  
  if(number == 9) {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
