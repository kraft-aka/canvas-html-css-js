const canvas = document.getElementById("draw");

//create context
const ctx = canvas.getContext("2d");

// setting height and width
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// set the color for the stroke
ctx.strokeStyle = "#111";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 10;
ctx.globalCompositeOperation = "xor";

// var to determine when the mouse is down and clicked is true;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = false;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 75%)`;
  ctx.beginPath();
  // starts drawing from
  ctx.moveTo(lastX, lastY);
  // to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // updates position of the stroke
  lastX = e.offsetX;
  lastY = e.offsetY;

  // changes the color in hsl
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
console.log(ctx.strokeStyle);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // updates position of the stroke
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
