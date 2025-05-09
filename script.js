function getRandomColor() {
  const letters = '0123456789ABCDEF'; //Assigns the numbers and letters in hexadecimal color code to the variable letters
  let color = '#'; // assigns the # symbol to the color variable. # represents color and starts any color code
  for (let i = 0; i < 6; i++) { //i=0 0<6
    color += letters[Math.floor(Math.random() * 16)]; //adds and assigns random numbers and letters 6times to color the variable to form a hexcode    
  }
  return color; //returns color
}

setInterval(function () {
  document.getElementById('date-time').style.color = getRandomColor();
}, 1000); //gets random color every miliseconds and assigns it to the date-time id from the html

function updateDateTime() {
  const now = new Date(); //creates current date and assigns it to the now variable
  const options = {
    year: 'numeric', // displays year in number
    month: 'long', // displays full month in words e.g January
    day: 'numeric', // displays day in number
    hour: 'numeric', // displays hour in number
    minute: 'numeric', // displays minute in number
    second: 'numeric', // displays second in number
    hour12: true // displays in 12 hour format with AM/PM
  };
  const dateTimeString = now.toLocaleString('en-US', options);
  document.getElementById('date-time').textContent = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();
