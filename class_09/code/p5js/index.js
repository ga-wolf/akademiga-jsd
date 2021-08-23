function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(5); // Lines are 5px wide
}

function draw() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  if (random(0, 10) < 5) {
    circle(mouseX, mouseY, 50);
  } else {
    rect(mouseX - 25, mouseY - 25, 50, 50);
  }
  line(width / 2, height / 2, mouseX, mouseY);
}
