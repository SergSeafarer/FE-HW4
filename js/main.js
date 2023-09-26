const secondsInHour = 3600;
const hours = +prompt('Enter the number of hours?');
const result = hours * secondsInHour;
if(hours > 0 && isNaN(hours) === false) {
  alert('Your result is: ' + result + ' seconds');
} else if(hours <= 0) {
  alert('Number must be above 0');
} else if(isNaN(hours) === true) {
  alert('Your entered value is not a number');
}