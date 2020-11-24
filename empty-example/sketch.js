function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
    rect(mouseX, mouseY, 15, 30);
    rect(mouseX+100, mouseY, 15, 30);
}