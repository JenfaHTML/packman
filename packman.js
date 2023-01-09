var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ['./icon/PacManOR.png', './icon/PacManCR.png'],
  ['./icon/PacManOL.png', './icon/PacManCL.png'],
];
var direction = 0;
var focus = 0;
const pacMen = [];

/*function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}
// Factory to make a PacMan
function makePac() {
  // returns an object with values scaled {x: 33, y: 21}
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './icon/PacManCL.png';
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
  // new style of creating an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
*/



function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width;
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
      pos -= 20;
      img.style.left = pos + "px";
    } else {
      pos += 20;
      img.style.left = pos + "px";
    }
  }
  setInterval(Run, 300);
  
  function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
    if (direction == 1 && pos < 0) direction = 0;
  
    return direction;
  }
  