const randomeColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomeColor());
let stopcolor;

const startChangingColor = function () {
  if(!stopcolor){
    stopcolor = setInterval(changecolor, 1000);

  }
  function changecolor() {
    document.body.style.backgroundColor = randomeColor();
  }
};
const stopChangingColor = function () {
  clearInterval(stopcolor, 1000);
  stopcolor = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
