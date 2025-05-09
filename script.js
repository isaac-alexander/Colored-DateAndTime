function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function () {
  document.getElementById('date-time').style.color = getRandomColor();
}, 1000);

function updateDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };
  const dateTimeString = now.toLocaleString('en-US', options);
  document.getElementById('date-time').textContent = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();
