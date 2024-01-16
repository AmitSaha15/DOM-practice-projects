const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // let hour = date.getHours();
  // // console.log(hour);
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();
  // clock.innerHTML = `${hour}:${minutes}:${seconds}`;

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
