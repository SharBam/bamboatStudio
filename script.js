function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255, 0);
textAlign(CENTER, CENTER);
}

function draw() {
	// noStroke();
	// fill(mouseX / 3, mouseX / 6, mouseY / 2, 229);
  // circle(mouseX - 1, mouseY - 1, 12 * noise(frameCount / mouseX + mouseY));
      stroke(0);
			strokeWeight(0.5);
			fill(random(255, 255));
			text('Coming Soon', mouseX, mouseY);
			textSize(64);
  
}

function mousePressed() {
	background(255);
}

function mouseReleased() {
	background(255);
}
