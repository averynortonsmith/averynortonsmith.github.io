let x = 0;
let y = 0;

let dx = 1;
let dy = 1;

const icon = document.querySelector("#icon");

function render() {
  requestAnimationFrame(render);

  // re-calculate with each render in case the window size changes
  let maxX = window.innerWidth - icon.clientWidth;
  let maxY = window.innerHeight - icon.clientHeight;

  const speed = 4;

  if (x < 0 || x > maxX) {
    dx *= -1;
  }

  if (y < 0 || y > maxY) {
    dy *= -1;
  }

  x += dx * speed;
  y += dy * speed;

  icon.style.left = `${x}px`;
  icon.style.top = `${y}px`;
}

render();
